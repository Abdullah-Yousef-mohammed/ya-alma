"use client";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style jsx global>{`
        header.site-navbar { display: none !important; }
        footer.site-footer { display: none !important; }
        .consultant-widget { display: none !important; }
        body > div > main.min-h-screen { min-height: auto !important; }
      `}</style>
      {children}
    </>
  );
}
