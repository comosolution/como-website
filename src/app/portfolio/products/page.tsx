import { card, defaultPadding } from "@/app/style/style";
import { getAllEntries, Portfolio } from "@/app/utils/contentful";
import { Button } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const products: Portfolio[] = await getAllEntries("produkte");

  return (
    <main className={`flex flex-col items-center gap-8 ${defaultPadding}`}>
      <h4 className="text-center">
        Diese Produkte haben wir für Sie im Angebot
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => {
          return (
            <Link
              key={index}
              href={`/portfolio/products/${product.fields.slug}`}
              className={card}
            >
              <div className="relative overflow-hidden w-[120px] h-[32px]">
                <Image
                  src={`/logos/${product.fields.brand}.svg`}
                  alt="Logo"
                  fill
                  className="inverted"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h5 className="text-center">{product.fields.name}</h5>
            </Link>
          );
        })}
      </div>
      <div className="flex items-center justify-center">
        <Button
          variant="transparent"
          component={Link}
          href="/portfolio"
          leftSection={<IconChevronLeft size={16} />}
        >
          Zurück zum Portfolio
        </Button>
      </div>
    </main>
  );
}
