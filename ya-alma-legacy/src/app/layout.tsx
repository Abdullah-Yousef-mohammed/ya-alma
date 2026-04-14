import type { Metadata } from "next";
import { Inter, Tajawal } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import { CurrencyProvider } from "@/lib/CurrencyContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassmorphicAIConsultant from "@/components/ui/GlassmorphicAIConsultant";
import { CompareProvider } from "@/lib/CompareContext";
import CompareTray from "@/components/ui/CompareTray";
import { CourseCompareProvider } from "@/lib/CourseCompareContext";
import CourseCompareTray from "@/components/ui/CourseCompareTray";
import SmoothScrolling from "@/components/layout/SmoothScrolling";
import CustomCursor from "@/components/ui/CustomCursor";
import UISoundProvider from "@/components/providers/UISoundProvider";
import ThemeProviderWrapper from "@/components/providers/ThemeProviderWrapper";
import AuthProvider from "@/components/providers/AuthProvider";

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
  title: {
    template: '%s | Y.A Alma Legacy',
    default: 'Y.A Alma Legacy - A World of Experiences',
  },
  description: 'Expert guidance for your educational journey in Malaysia. Discover top universities, language centers, and exclusive scholarships.',
  openGraph: {
    title: 'Y.A Alma Legacy - A World of Experiences',
    description: 'Expert guidance for your educational journey in Malaysia. Discover top universities, language centers, and exclusive scholarships.',
    url: 'https://yaalmalegacy.com',
    siteName: 'Y.A Alma Legacy',
    images: [{ url: '/hero-en.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Y.A Alma Legacy',
    description: 'Expert guidance for your educational journey in Malaysia.',
    images: ['/hero-en.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={`${inter.variable} ${tajawal.variable} antialiased selection:bg-[var(--color-brand-gold)] selection:text-[var(--color-brand-navy)] bg-white dark:bg-[#0b0f19] text-gray-900 dark:text-gray-100 transition-colors duration-500`}>
        <ThemeProviderWrapper>
          <AuthProvider>
          <LanguageProvider>
            <CurrencyProvider>
              <CompareProvider>
                <CourseCompareProvider>
                  <UISoundProvider>
                    <SmoothScrolling>
                      <CustomCursor />
                      <Navbar />
                    <main className="min-h-screen">
                      {children}
                    </main>
                    <GlassmorphicAIConsultant />
                    <Footer />
                    <CompareTray />
                    <CourseCompareTray />
                  </SmoothScrolling>
                </UISoundProvider>
                </CourseCompareProvider>
              </CompareProvider>
            </CurrencyProvider>
          </LanguageProvider>
          </AuthProvider>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
