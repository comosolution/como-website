import { StylesConfig } from "react-select";

export const customStyles: StylesConfig = {
  control: (base, { isFocused }) => ({
    ...base,
    background: "transparent",
    boxShadow: "none",
    outline: "none",
    border: "none",
    borderRadius: "0",
    borderBottom: isFocused
      ? "1px solid rgba(var(--orange-rgb), 1)"
      : "1px solid rgba(var(--foreground-rgb), 0.1)",
    fontSize: "20px",
    padding: "0.4rem 0",
    width: "100%",
    ":hover": {
      ...base[":hover"],
      borderBottom: isFocused
        ? "1px solid rgba(var(--orange-rgb), 1)"
        : "1px solid rgba(var(--foreground-rgb), 0.1)",
      cursor: "pointer",
    },
  }),
  menu: (base) => ({
    ...base,
    backdropFilter: "blur(8px)",
    background: "rgba(0, 0, 0, 0.7)",
    border: "1px solid rgba(var(--foreground-rgb), 0.1)",
    boxShadow: "0 4px 8px -0 rgb(var(--background-rgb))",
    width: "100%",
  }),
  option: (base, { isFocused }) => ({
    ...base,
    background: "none",
    color: isFocused ? "rgba(var(--orange-rgb), 1)" : "",
    cursor: "pointer",
    fontSize: "20px",
    padding: "4px 12px",
    transition: "var(--default-transition)",
    ":active": {
      ...base[":active"],
      backgroundColor: "rgba(var(--orange-rgb), 1)",
      color: "rgb(var(--foreground-rgb));",
    },
  }),
  multiValue: (base) => ({
    ...base,
    background: "none",
    border: "1px solid rgba(var(--yellow-rgb), 1)",
    borderRadius: "100px",
    fontSize: "16px",
    letterSpacing: "-4%",
    padding: "0.1rem 0.2rem",
    "& div": {
      color: "rgb(var(--foreground-rgb));",
    },
  }),
  multiValueRemove: (base) => ({
    ...base,
    ":hover": {
      background: "none",
    },
  }),
  valueContainer: (base) => ({
    ...base,
    padding: "0",
  }),
  indicatorSeparator: () => ({ display: "none" }),
};
