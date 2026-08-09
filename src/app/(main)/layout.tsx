import { ShellLayout } from "@components/Layout/ShellLayout";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ShellLayout>{children}</ShellLayout>;
}
