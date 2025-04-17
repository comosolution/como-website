import { useMantineColorScheme } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Link href="/">
      <Image
        src={colorScheme === "dark" ? "/logo_dark.svg" : "/logo.svg"}
        alt="CoMo Logo"
        width="96"
        height="96"
      />
    </Link>
  );
}
