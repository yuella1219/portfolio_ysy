import type { Metadata } from "next";
import { Navigator } from "@/components/nav";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "Portfolio 2026",
  description: "Web Publisher Portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body>
        <Navigator />
        {children}
      </body>
    </html>
  );
}
