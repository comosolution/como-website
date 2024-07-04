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
      ? "1px solid rgb(255, 105, 0)"
      : "1px solid rgba(255, 255, 255, 0.2)",
    fontSize: "20px",
    padding: "0.4rem 0",
    width: "100%",
    ":hover": {
      ...base[":hover"],
      borderBottom: isFocused
        ? "1px solid rgb(255, 105, 0)"
        : "1px solid rgba(255, 255, 255, 0.2)",
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
    background: isFocused ? "rgba(255, 105, 0, 0.7)" : "",
    cursor: "pointer",
    ":active": {
      ...base[":active"],
      backgroundColor: "rgb(255, 105, 0)",
    },
  }),
  multiValue: (base) => ({
    ...base,
    background: "rgb(179, 25, 62)",
    borderRadius: "100px",
    fontSize: "16px",
    letterSpacing: "-4%",
    padding: "0.1rem 0.2rem",
    "& div": {
      color: "rgb(255,255,255)",
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
