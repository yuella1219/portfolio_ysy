import type { Metadata } from "next";
import "@styles/globals.scss";
import { SmoothScroll } from "@contexts/index";

export const metadata: Metadata = {
  title: "Forward Through Crafting",
  description:
    "Forward Through Crafting is a portfolio of Seungyeon, a web publisher who creates accessible and interactive web experiences.",
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
