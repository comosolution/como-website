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
  const isMobile = useMediaQuery("(max-width: 620px)");
  const pathname = usePathname();
  const [prevPos, setPrevPos] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [opened, { open, close }] = useDisclosure(false);

  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

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

  return (
    <>
      <header
        className={`fixed ${
          headerVisible ? "top-0" : "-top-24"
        } z-10 w-screen flex justify-between items-center px-8 py-4 backdrop-blur-md bg-[rgba(var(--background-rgb), 0.2)] transition-all duration-300`}
      >
        {isMobile ? (
          <>
            <Logo />
            <div className="flex items-center gap-2">
              <ActionIcon
                size="lg"
                variant="transparent"
                onClick={() =>
                  setColorScheme(
                    computedColorScheme === "light" ? "dark" : "light"
                  )
                }
                aria-label="Toggle color scheme"
              >
                {colorScheme === "dark" ? (
                  <IconSun size={20} />
                ) : (
                  <IconMoon size={20} />
                )}
              </ActionIcon>
              <Button
                variant="light"
                onClick={open}
                leftSection={<IconMenuDeep size={20} />}
              >
                Menü
              </Button>
            </div>
          </>
        ) : (
          <>
            <Button
              w={128}
              variant="transparent"
              color={colorScheme === "dark" ? "white" : "black"}
              onClick={open}
              leftSection={<IconMenuDeep size={20} />}
            >
              Menü
            </Button>
            <Logo />
            <div className="flex items-center gap-2">
              <ActionIcon
                size="lg"
                variant="transparent"
                onClick={() =>
                  setColorScheme(
                    computedColorScheme === "light" ? "dark" : "light"
                  )
                }
                aria-label="Toggle color scheme"
              >
                {colorScheme === "dark" ? (
                  <IconSun size={20} />
                ) : (
                  <IconMoon size={20} />
                )}
              </ActionIcon>
              <Button variant="light" component={Link} href="/contact">
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
        position="left"
        size="xs"
      >
        <nav className="flex flex-col gap-4">
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
