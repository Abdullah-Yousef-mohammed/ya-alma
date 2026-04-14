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
    default: 'Y.A Alma Legacy | وكالة تعليمية رائدة للدراسة في ماليزيا',
  },
  description: 'واي آيه للخدمات التعليمية - استشارات تعليمية مجانية وتأمين قبولات جامعية في أفضل جامعات ماليزيا. احصل على قبولك الجامعي وتأشيرة الطالب بسهولة.',
  keywords: ['الدراسة في ماليزيا', 'جامعات ماليزيا', 'قبول جامعي ماليزيا', 'منح دراسية في ماليزيا', 'الدراسة في الخارج', 'فيزا طالب ماليزيا', 'Study in Malaysia'],
  openGraph: {
    title: 'Y.A Alma Legacy | خبيرتك للدراسة في ماليزيا',
    description: 'استشارات تعليمية وتأمين قبولات جامعية مجانية في ماليزيا.',
    url: 'https://yaalmalegacy.com',
    siteName: 'Y.A Alma Legacy',
    images: [{ url: '/hero-ar.png', width: 1200, height: 630, alt: 'الدراسة في ماليزيا' }],
    locale: 'ar_SA',
    alternateLocale: ['en_US', 'zh_CN', 'ms_MY'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Y.A Alma Legacy | الدراسة في ماليزيا',
    description: 'خبراء القبولات الجامعية والدراسة في ماليزيا.',
    images: ['/hero-ar.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Y.A Alma Legacy',
  url: 'https://yaalmalegacy.com',
  logo: 'https://yaalmalegacy.com/LOGO_transparent.png',
  description: 'وكالة تعليمية رائدة متخصصة في تأمين القبولات الجامعية في ماليزيا.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kuala Lumpur',
    addressCountry: 'MY'
  },
  sameAs: [
    'https://twitter.com/yaalmalegacy',
    'https://facebook.com/yaalmalegacy',
    'https://instagram.com/yaalmalegacy'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+60-14-324-0499',
    contactType: 'Admissions Support'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${inter.variable} ${tajawal.variable} antialiased selection:bg-[var(--color-brand-gold)] selection:text-[var(--color-brand-navy)] bg-white dark:bg-[#0b0f19] text-gray-900 dark:text-gray-100 transition-colors duration-500`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
