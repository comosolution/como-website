"use client";
import { useEffect } from "react";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
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

  return <>{children}</>;
}
