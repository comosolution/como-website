"use client";
import { createTheme, MantineProvider } from "@mantine/core";
import { usePathname } from "next/navigation";
import Contact from "./contact";
import DeployButton from "./deployButton";
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
    red: [
      "#ffebf1",
      "#f9d5de",
      "#f0a9ba",
      "#e97a94",
      "#e25274",
      "#df3a5f",
      "#de2d55",
      "#c52046",
      "#b1193d",
      "#9b0b34",
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

  return (
    <MantineProvider theme={theme}>
      <ScrollProgress />
      <Nav />
      <FAB />
      <DeployButton />
      <div className="pt-32">{children}</div>
      {showContact && <Contact />}
      <Footer />
    </MantineProvider>
  );
}
