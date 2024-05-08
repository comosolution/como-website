import { usePathname } from "next/navigation";

export default function NavItem({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) {
  const path = usePathname();
  const active =
    (path.includes(href) && href !== "/") || (path === "/" && href === "/");

  return (
    <p className={`navItem ${active ? "text-rose-600" : "link"} ${className}`}>
      {children}
    </p>
  );
}
