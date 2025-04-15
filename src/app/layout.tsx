import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import type { Metadata } from "next";
import { Blinker } from "next/font/google";
import PageWrapper from "./components/pageWrapper";
import "./style/globals.css";

const blinker = Blinker({ weight: ["200", "400", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CoMo Solution GmbH - Ihr Partner für smarte IT-Lösungen",
  description: "Innovative Lösungen für Collaboration und Mobile Work",
  authors: [{ name: "CoMo Solution GmbH", url: "https://como-solution.de" }],
  keywords: ["collaboration", "mobile", "solution", "cybersecurity"],
};

const theme = createTheme({
  primaryColor: "orange",
  colors: {
    orange: [
      "#fff1e2",
      "#ffe2cc",
      "#ffc49a",
      "#ffa464",
      "#fe8937",
      "#fe781a",
      "#ff6e09",
      "#e45d00",
      "#cb5100",
      "#b14400",
    ],
  },
});

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
      <body className={`${blinker.className} pt-32`} id="top">
        <MantineProvider theme={theme} defaultColorScheme="light">
          <PageWrapper>{children}</PageWrapper>
        </MantineProvider>
      </body>
    </html>
  );
}
