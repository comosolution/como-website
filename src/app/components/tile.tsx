import Link from "next/link";
import { ReactNode } from "react";
import { card } from "../style/style";

export default function Tile({
  children,
  className,
  href,
}: {
  children?: ReactNode;
  className?: string;
  href?: string;
}) {
  const style = `flex flex-col justify-between items-end gap-4 p-8 ${card} h-full transition-all`;

  const tile = <div className={`flex flex-col ${className}`}>{children}</div>;

  if (href) {
    return (
      <Link
        className={`tile ${style} hover:bg-[rgba(var(--highlight-rgb),0.4)] cursor-pointer`}
        href={href}
      >
        {tile}
      </Link>
    );
  } else {
    return <div className={style}>{tile}</div>;
  }
}
