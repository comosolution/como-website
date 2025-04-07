import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PageWrapper from "./components/pageWrapper";
import "./style/globals.css";

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
      <head>
        <link rel="canonical" href="https://como-solution.de" />
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="E6+1lQxOgW1Q4czobbQAuw"
          async
        />
      </head>
      <body className={`${inter.className} pt-32`} id="top">
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
