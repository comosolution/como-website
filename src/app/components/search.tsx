"use client";
import { Autocomplete } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import branches from "../data/portfolio/branches.json";
import products from "../data/portfolio/products.json";
import services from "../data/portfolio/services.json";

export default function Search() {
  const data = [...branches, ...products, ...services];

  return (
    <Autocomplete
      size="lg"
      name="search"
      placeholder="z.B. BlackBerry, Entwicklung, Sport"
      className="w-full"
      leftSection={<IconSearch size={24} />}
      data={data.map((d) => d.name).sort()}
    />
  );
}
