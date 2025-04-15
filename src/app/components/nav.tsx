"use client";
import { Burger, Button, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSend } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav } from "../config/nav";
import Menu from "./menu";
import NavItem from "./navItem";

export default function Nav() {
  const pathname = usePathname();
  const [prevPos, setPrevPos] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [opened, { open, close }] = useDisclosure(false);

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
        className={`fixed  ${
          headerVisible ? "top-0" : "-top-24"
        } z-10 w-screen flex justify-between px-16 py-4 backdrop-blur-sm bg-white/20 transition-all duration-300`}
      >
        <Link href="/">
          <Image src="/logo.svg" alt="CoMo Logo" width="96" height="96" />
        </Link>
        <div className="flex items-center gap-4">
          <Button
            variant="light"
            component={Link}
            href="/contact"
            leftSection={<IconSend size={16} />}
          >
            Kontakt
          </Button>
          <Burger
            opened={opened}
            onClick={open}
            aria-label="Toggle navigation"
          />
          <Drawer
            opened={opened}
            onClose={close}
            title="Menü"
            position="right"
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
            </nav>
          </Drawer>
        </div>
      </header>
    </>
  );
}
