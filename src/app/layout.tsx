import type { Metadata } from "next";
import "@styles/globals.scss";
import { Header, Footer } from "@components/index";

export const metadata: Metadata = {
  title: "Portfolio 2026",
  description: "Web Publisher Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main id="root">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
