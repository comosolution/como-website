import "@mantine/core/styles.css";
import type { Metadata } from "next";
import { Blinker } from "next/font/google";
import PageWrapper from "./components/pageWrapper";
import "./style/globals.css";

const blinker = Blinker({ weight: ["200", "400", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CoMo Solution GmbH - Ihr Partner für smarte IT-Lösungen",
  description: "Wir sind die Lösungsfinder",
  authors: [{ name: "CoMo Solution GmbH", url: "https://como-solution.de" }],
  keywords: ["collaboration", "mobile", "solution", "cybersecurity"],
  openGraph: {
    type: "website",
    url: "https://como-solution.de",
    siteName: "CoMo Solution GmbH",
    title: "CoMo Solution GmbH - Ihr Partner für smarte IT-Lösungen",
    description: "Wir sind die Lösungsfinder",
    images: [
      {
        url: "https://como-solution.de/como.png",
        alt: "CoMo Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        {process.env.NEXT_PUBLIC_VERCEL_ENV === "preview" ? (
          <meta name="robots" content="noindex, nofollow" />
        ) : (
          <link rel="canonical" href="https://como-solution.de" />
        )}
        <meta name="theme-color" content="#FF6900" />

        {/* <!-- Copyright (c) 2000-2025 etracker GmbH. All rights reserved. No reproduction, publication or modification allowed without permission. --> <!-- etracker code 6.0 -->  */}
        <script
          data-cookieconsent="ignore"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `// var et_pagename = ""; // var et_areas = "";`,
          }}
        ></script>
        <script
          data-cookieconsent="ignore"
          id="_etLoader"
          type="text/javascript"
          charSet="UTF-8"
          data-block-cookies="true"
          data-secure-code="1WxI3b"
          data-page-changed-detection="url"
          src="//code.etracker.com/code/e.js"
          async
        ></script>
        {/* <!-- etracker code 6.0 end --> */}
        <script
          data-cookieconsent="ignore"
          type="text/javascript"
          src="/static/etracker.js"
        ></script>
      </head>
      <body className={`${blinker.className}`} id="top">
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
