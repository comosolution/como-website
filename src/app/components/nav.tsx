"use client";
import {
  ActionIcon,
  Button,
  Drawer,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { IconMenuDeep, IconMoon, IconSun, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav } from "../config/nav";
import Logo from "./logo";
import Menu from "./menu";
import NavItem from "./navItem";

const LOCAL_STORAGE_KEY = "como.website.hint";
const hint = {
  label: "Jetzt KI-Beratung anfragen",
  key: "ki-beratung",
};

export default function Nav() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);
  const [prevPos, setPrevPos] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [hintVisible, setHintVisible] = useState(true);
  const [opened, { open, close }] = useDisclosure(false);

  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  useEffect(() => {
    const storedHint = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedHint && storedHint === hint.key) {
      setHintVisible(false);
    }
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

  const MenuButton = () => {
    return (
      <Button
        size={isMobile ? "sm" : "md"}
        variant={isMobile ? "light" : "transparent"}
        color="red"
        onClick={open}
        leftSection={<IconMenuDeep size={20} />}
      >
        Menü
      </Button>
    );
  };

  return (
    <>
      <header
        className={`fixed ${
          headerVisible ? "top-0" : "-top-28"
        } z-50 w-screen grid grid-cols-2 sm:grid-cols-3 items-center px-8 py-2 transition-all duration-300 ${
          prevPos < 1
            ? "bg-[rgba(var(--background-rgb),0.8)]"
            : "bg-[rgba(var(--background-rgb),0.5)]"
        } backdrop-blur-md  shadow-2xl`}
      >
        {hintVisible && (
          <div className="relative col-span-2 sm:col-span-3 px-8 py-1 -mx-8 mb-2 -mt-2 bg-[var(--foreground)] flex items-center sm:justify-center">
            <Link
              href="/portfolio/services/ki-beratung"
              className="unstyled text-white"
            >
              Jetzt KI-Beratung anfragen
            </Link>
            <ActionIcon
              size="xs"
              color="white"
              variant="transparent"
              className="absolute right-8 opacity-50"
              onClick={() => {
                setHintVisible(false);
                localStorage.setItem(LOCAL_STORAGE_KEY, hint.key);
              }}
            >
              <IconX />
            </ActionIcon>
          </div>
        )}
        {isMobile ? (
          <>
            <Logo />
            <div className="flex justify-end items-center gap-2">
              <ThemeSwitch />
              <MenuButton />
            </div>
          </>
        ) : (
          <>
            <div>
              <MenuButton />
            </div>
            <Logo />
            <div className="flex justify-end items-center gap-2">
              <ThemeSwitch />
              <Button size="md" component={Link} href="/contact">
                Kontakt
              </Button>
            </div>
          </>
        )}
      </header>
      <Drawer
        opened={opened}
        onClose={close}
        withCloseButton={false}
        position={isMobile ? "right" : "left"}
        size="xs"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
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
