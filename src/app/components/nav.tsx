"use client";
import {
  ActionIcon,
  Button,
  Drawer,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { IconMenuDeep, IconMoon, IconSun } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav } from "../config/nav";
import Logo from "./logo";
import Menu from "./menu";
import NavItem from "./navItem";

export default function Nav() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [prevPos, setPrevPos] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [opened, { open, close }] = useDisclosure(false);

  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", colorScheme === "dark");
  }, [colorScheme]);

  useEffect(() => {
    close();
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentPos = window.scrollY;
      if (prevPos > currentPos || prevPos < 1) {
        setHeaderVisible(true);
      } else {
        setHeaderVisible(false);
      }
      setPrevPos(currentPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevPos]);

  const ThemeSwitch = () => {
    return mounted ? (
      <ActionIcon
        id="ThemeSwitch"
        size="lg"
        variant="transparent"
        onClick={() =>
          setColorScheme(computedColorScheme === "light" ? "dark" : "light")
        }
        aria-label="Toggle color scheme"
      >
        {colorScheme === "dark" ? (
          <IconSun size={20} />
        ) : (
          <IconMoon size={20} />
        )}
      </ActionIcon>
    ) : null;
  };

  return (
    <>
      <header
        className={`fixed ${
          headerVisible ? "top-0" : "-top-24"
        } z-50 w-screen grid grid-cols-2 sm:grid-cols-3 items-center px-8 py-4 backdrop-blur-md bg-[rgba(var(--background-rgb),0.1)] transition-all duration-300`}
      >
        {isMobile ? (
          <>
            <Logo />
            <div className="flex justify-end items-center gap-2">
              <ThemeSwitch />
              <Button onClick={open} leftSection={<IconMenuDeep size={20} />}>
                Menü
              </Button>
            </div>
          </>
        ) : (
          <>
            <Button
              w={128}
              variant="transparent"
              color="default"
              onClick={open}
              leftSection={<IconMenuDeep size={20} />}
            >
              Menü
            </Button>
            <Logo />
            <div className="flex justify-end items-center gap-2">
              {process.env.NEXT_PUBLIC_VERCEL_ENV === "preview" && (
                <pre className="muted small">Dev</pre>
              )}
              <ThemeSwitch />
              <Button component={Link} href="/contact">
                Kontakt
              </Button>
            </div>
          </>
        )}
      </header>
      <Drawer
        opened={opened}
        onClose={close}
        title="CoMo Solution GmbH"
        position={isMobile ? "right" : "left"}
        size="xs"
      >
        <nav className="flex flex-col">
          {mainNav.map((entry) => {
            return entry.ref ? (
              <Link key={entry.name} href={entry.ref} passHref>
                <NavItem href={entry.ref}>{entry.name}</NavItem>
              </Link>
            ) : (
              entry.child && <Menu key={entry.name} content={entry.child} />
            );
          })}
          <Link href="/contact" passHref>
            <NavItem href="/contact">Kontakt</NavItem>
          </Link>
        </nav>
      </Drawer>
    </>
  );
}
