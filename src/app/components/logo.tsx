import { useMantineColorScheme } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Logo() {
  const { colorScheme } = useMantineColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Link href="/">
      <Image
        src={colorScheme === "dark" ? "/logo_dark.svg" : "/logo.svg"}
        alt="CoMo Logo"
        width={96}
        height={96}
      />
    </Link>
  );
}
