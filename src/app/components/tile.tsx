import Link from "next/link";
import { ReactNode } from "react";

export default function Tile({
  children,
  className,
  href,
}: {
  children?: ReactNode;
  className?: string;
  href?: string;
}) {
  const style =
    "flex flex-col justify-between items-end gap-4 p-8 rounded-2xl backdrop-blur-sm bg-neutral-900/70 transition-all";

  const tile = (
    <>
      <div className={`flex flex-col ${className}`}>{children}</div>
    </>
  );

  if (href) {
    return (
      <Link
        className={`tile ${style} hover:bg-neutral-900 cursor-pointer`}
        href={href}
      >
        {tile}
      </Link>
    );
  } else {
    return <div className={style}>{tile}</div>;
  }
}
