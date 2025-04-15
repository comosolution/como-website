"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Contact from "./contact";
import FAB from "./fab";
import Footer from "./footer";
import Nav from "./nav";
import ScrollProgress from "./scrollProgress";

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
    <>
      <ScrollProgress />
      <Nav />
      <FAB />
      {children}
      {showContact && <Contact />}
      <Footer />
    </>
  );
}
