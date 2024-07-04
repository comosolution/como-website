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
      : "1px solid rgba(var(--foreground-rgb), 0.2)",
    fontSize: "20px",
    padding: "0.4rem 0",
    width: "100%",
    ":hover": {
      ...base[":hover"],
      borderBottom: isFocused
        ? "1px solid rgba(var(--orange-rgb), 1)"
        : "1px solid rgba(var(--foreground-rgb), 0.2)",
      cursor: "pointer",
    },
  }),
  menu: (base) => ({
    ...base,
    background: "rgb(0,0,0)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    width: "100%",
  }),
  option: (base, { isFocused }) => ({
    ...base,
    background: isFocused ? "rgba(var(--orange-rgb), 0.8)" : "",
    cursor: "pointer",
    ":active": {
      ...base[":active"],
      backgroundColor: "rgba(var(--orange-rgb), 1)",
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
