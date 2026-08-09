import { Header, Footer } from "@components/index";

interface ShellLayoutProps {
  children: React.ReactNode;
}

/** Header / main / Footer chrome — root layout.tsx와 page 사이 중간 레이어 */
export function ShellLayout({ children }: ShellLayoutProps) {
  return (
    <>
      <Header />
      <main id="root">{children}</main>
      <Footer />
    </>
  );
}
