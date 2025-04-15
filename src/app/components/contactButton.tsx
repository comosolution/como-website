import { Button } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { scrollTo } from "../utils/utils";

export default function ContactButton() {
  return (
    <Button
      onClick={() => scrollTo("contact")}
      leftSection={<IconChevronDown size={16} />}
    >
      Jetzt anfragen
    </Button>
  );
}
