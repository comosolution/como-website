"use client";
import { createTheme, MantineProvider } from "@mantine/core";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Contact from "./contact";
import FAB from "./fab";
import Footer from "./footer";
import Nav from "./nav";
import ScrollProgress from "./scrollProgress";

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

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideContactFormRoutes = ["/security-event/"];
  const showContact = !hideContactFormRoutes.includes(pathname);

  useEffect(() => {
    var _mtm = ((window as any)._mtm = (window as any)._mtm || []);
    _mtm.push({ "mtm.startTime": new Date().getTime(), event: "mtm.Start" });
    var d = document,
      g = d.createElement("script"),
      s = d.getElementsByTagName("script")[0];
    g.async = true;
    g.src =
      "https://cdn.matomo.cloud/comosolution.matomo.cloud/container_PS6VgYKR.js";
    s.parentNode!.insertBefore(g, s);
  }, []);

  return (
    <MantineProvider theme={theme}>
      <ScrollProgress />
      <Nav />
      <FAB />
      <div className="pt-32">{children}</div>
      {showContact && <Contact />}
      <Footer />
    </MantineProvider>
  );
}
