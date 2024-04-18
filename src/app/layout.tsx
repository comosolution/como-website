import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./style/globals.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Contact from "./components/contact";
import FAB from "./components/fab";
import ScrollProgress from "./components/scrollProgress";
import PageWrapper from "./components/pageWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CoMo Solution GmbH - Ihr Partner für smarte IT-Lösungen",
  description: "Innovative Lösungen für Collaboration und Mobile Work",
  authors: [{ name: "CoMo Solution GmbH", url: "https://como-solution.de" }],
  keywords: ["collaboration", "mobile", "solution", "cybersecurity"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.className} pt-32`} id="top">
        <ScrollProgress />
        <Nav />
        <FAB />
        <PageWrapper>{children}</PageWrapper>
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
