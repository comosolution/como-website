import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./style/globals.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Contact from "./components/contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CoMo Solution GmbH",
  description: "Innovative Lösungen für Collaboration und Mobile Work",
  authors: [
    { name: "CoMo Solution GmbH", url: "https://www.como-solution.de" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.className} pt-32`} id="top">
        <Nav />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
