import Image from "next/image";
import Link from "next/link";

export default function Button({
  className,
  href,
  disabled,
  icon,
  iconRotation,
  text,
  type,
  onClick,
}: {
  className?: string;
  href?: string;
  disabled?: boolean;
  icon?: "arrow" | "chevron";
  iconRotation?: string;
  text?: string;
  type: "primary" | "secondary" | "tertiary" | "contact";
  onClick?: () => void;
}) {
  const buttonType = {
    primary: "bg-orange-500 text-white hover:bg-orange-600",
    secondary: "bg-white text-black",
    tertiary: "bg-transparent text-white hover:bg-neutral-800/80",
    contact:
      "font-normal text-white/80 border-solid border border-orange-500 hover:bg-orange-600/10 shadow-lg shadow-orange-500/50",
  };

  var button = (
    <button
      className={`button ${className} ${type} flex items-center gap-2 px-6 py-2 rounded-full cursor-pointer ${buttonType[type]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
      {icon && (
        <Image
          src={`/icons/${icon}.svg`}
          width={24}
          height={24}
          alt={icon || "icon"}
          className={
            iconRotation ? `rotate-[${iconRotation}deg] transition-all` : ""
          }
        />
      )}
    </button>
  );

  if (href) {
    return href.includes("mailto:") ? (
      <a href={href}>{button}</a>
    ) : (
      <Link href={href}>{button}</Link>
    );
  }

  return button;
}
