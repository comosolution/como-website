"use client";
import { ActionIcon } from "@mantine/core";
import { IconArrowUp } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { scrollTo } from "../utils/utils";

export default function FAB() {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    setShow(window.scrollY > 600 ? true : false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    show && (
      <ActionIcon
        color="red"
        variant="light"
        size="xl"
        radius="xl"
        aria-label="Zurück nach oben"
        className="fixed right-8 bottom-8 z-50 shadow-xl shadow-black/10 backdrop-blur-md"
        onClick={() => scrollTo("top")}
      >
        <IconArrowUp size={24} />
      </ActionIcon>
    )
  );
}
