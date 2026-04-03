import type { Metadata } from "next";
import { Inter, Tajawal } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import { CurrencyProvider } from "@/lib/CurrencyContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConsultantWidget from "@/components/ui/ConsultantWidget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Y.A Alma Legacy - A World of Experiences",
  description: "Expert guidance for your educational journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={`${inter.variable} ${tajawal.variable} antialiased selection:bg-[var(--color-brand-gold)] selection:text-[var(--color-brand-navy)]`}>
        <LanguageProvider>
          <CurrencyProvider>
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <ConsultantWidget />
            <Footer />
          </CurrencyProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
