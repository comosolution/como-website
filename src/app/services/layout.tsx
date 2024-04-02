import PageNav from "../components/pageNav";

export default function ServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <PageNav />
    </>
  );
}
