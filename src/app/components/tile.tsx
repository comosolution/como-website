import Link from "next/link";
import { ReactNode } from "react";
import { tile } from "../style/style";

export default function Tile({
  children,
  className,
  href,
}: {
  children?: ReactNode;
  className?: string;
  href?: string;
}) {
  const style = `flex flex-col justify-between gap-4 p-8 ${tile} h-full transition-all`;

  const card = <div className={`flex flex-col ${className}`}>{children}</div>;

  if (href) {
    return (
      <Link
        className={`tile ${style} hover:bg-[rgba(var(--highlight-rgb),0.4)] cursor-pointer`}
        href={href}
      >
        {card}
      </Link>
    );
  } else {
    return <div className={style}>{card}</div>;
  }
}
