import type { Metadata } from "next";
import "@styles/globals.scss";
import { SmoothScroll } from "@contexts/index";

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
        <SmoothScroll>{children}</SmoothScroll>
        <div id="portal-root"></div>
      </body>
    </html>
  );
}
