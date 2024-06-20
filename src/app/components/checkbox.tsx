import { ChangeEventHandler } from "react";

export default function Checkbox({
  children,
  checked,
  onChange,
  className,
  disabled,
}: {
  children: React.ReactNode;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  className?: string;
  disabled?: boolean;
}) {
  return (
    <label
      className={`checkboxContainer relative flex justify-between gap-4 pl-12 cursor-pointer ${className}`}
    >
      <input
        type="checkbox"
        className="absolute opacity-0 h-0 w-0"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className="check absolute t-0 left-0 pl-4 h-8 w-8 rounded bg-white" />
      {children}
    </label>
  );
}
