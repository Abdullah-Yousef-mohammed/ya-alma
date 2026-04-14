import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const API = process.env.INTERNAL_API_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "admin" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null;

        try {
          // Attempt purely local Spring Boot authentication
          const res = await fetch(`${API}/auth/login`, {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" }
          });
          
          if (res.ok) {
            const data = await res.json();
            return {
              id: "local",
              name: credentials.username,
              email: credentials.username,
              accessToken: data.token, // Store backend token
            };
          } else {
            const errorText = await res.text();
            console.error(`[NextAuth] Credentials login failed with status ${res.status}: ${errorText}`);
          }
          return null;
        } catch (e) {
          console.error("Auth Exception:", e);
          return null;
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        try {
          // Verify with Spring Boot if the google account exists and is approved
          const res = await fetch(`${API}/auth/google`, {
            method: 'POST',
            body: JSON.stringify({ email: user.email, name: user.name }),
            headers: { "Content-Type": "application/json" }
          });

          if (res.ok) {
            const data = await res.json();
            // Assign the spring boot token to the user object to persist in session
            (user as any).accessToken = data.token;
            return true;
          } else {
            const errorText = await res.text();
            console.error(`[NextAuth] Google login verification failed with status ${res.status}: ${errorText}`);
            // "Account pending admin approval" or similar
            // redirect to a custom error page
            return '/admin?error=pending_approval';
          }
        } catch (e) {
          console.error("Failed to sync google login with Spring Boot", e);
          return false;
        }
      }
      return true; // For credentials provider, authorize already checked
    },
    async jwt({ token, user, account }) {
      // If user object exists (e.g. at sign in), we attach the custom backend JWT to the token
      if (user && (user as any).accessToken) {
        token.accessToken = (user as any).accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      // Expose the backend JWT to the client side
      (session as any).accessToken = token.accessToken as string;
      return session;
    }
  },
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60, // 7 days
  },
  pages: {
    signIn: '/admin',
    error: '/admin', // Error code passed in query string as ?error=
  }
});

export { handler as GET, handler as POST };
