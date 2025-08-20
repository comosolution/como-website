"use client";
import { Button } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { scrollTo } from "../utils/utils";

export default function ContactButton({ text }: { text?: string }) {
  return (
    <Button
      onClick={() => scrollTo("contact", -75)}
      leftSection={<IconChevronDown size={16} />}
    >
      {text ? text : "Jetzt anfragen"}
    </Button>
  );
}
