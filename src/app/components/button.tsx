import Image from "next/image";
import Link from "next/link";

export default function Button({
  href,
  disabled,
  icon,
  iconLeft,
  iconRotation,
  text,
  type,
  onClick,
}: {
  href?: string;
  disabled?: boolean;
  icon?: "arrow" | "chevron" | "mail" | "phone" | "send";
  iconLeft?: boolean;
  iconRotation?: number;
  text?: string;
  type: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
}) {
  const buttonType = {
    primary: "bg-orange-500 text-white hover:bg-orange-600",
    secondary: "bg-white text-black",
    tertiary: "bg-transparent text-white hover:bg-neutral-800/80",
  };

  var button = (
    <button
      className={`button ${type} flex items-center ${
        iconLeft ? "flex-row-reverse" : "flex-row"
      } gap-2 px-6 py-2 rounded-full cursor-pointer ${buttonType[type]}`}
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
          className={`rotate-[${
            (iconRotation || 0).toString
          }deg] transition-all`}
        />
      )}
    </button>
  );

  if (href) {
    return <Link href={href}>{button}</Link>;
  }

  return button;
}
