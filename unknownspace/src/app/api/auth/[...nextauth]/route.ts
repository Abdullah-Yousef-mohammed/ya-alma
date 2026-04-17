import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

import fs from "fs/promises";
import path from "path";

const otpsPath = path.join(process.cwd(), "data/otps.json");

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "MOCK_CLIENT_ID",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "MOCK_CLIENT_SECRET",
    }),
    CredentialsProvider({
      name: "Phone",
      credentials: {
        phone: { label: "Phone", type: "text" },
        otp: { label: "OTP", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.phone || !credentials?.otp) return null;
        
        try {
           const raw = await fs.readFile(otpsPath, "utf-8");
           const store = JSON.parse(raw);
           
           // Verify OTP matches
           if (store[credentials.phone] !== credentials.otp && credentials.otp !== "000000") { // 000000 is a master hack for pure local test
              throw new Error("Invalid OTP");
           }
           
           // Consume OTP
           delete store[credentials.phone];
           await fs.writeFile(otpsPath, JSON.stringify(store, null, 2), "utf-8");
        } catch(e) {
           // Allow pass if we're testing with the master code when store isn't ready
           if (credentials.otp !== "000000") return null;
        }

        // Mock DB User verification after OTP logic
        return { 
           id: credentials.phone, 
           name: credentials.phone, // using phone as name
           email: `${credentials.phone}@customer.local`,
           phone: credentials.phone 
        };
      }
    })
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      if (token && session.user) {
         session.user.name = token.name as string;
         // Pass the actual unique identifier to the session
         (session.user as any).phone = token.sub || token.name;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
         token.name = user.name;
         token.sub = user.id;
      }
      return token;
    }
  },
  secret: process.env.NEXTAUTH_SECRET || "SUPER_SECRET_FALLBACK",
  session: { 
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  }
});

export { handler as GET, handler as POST };
