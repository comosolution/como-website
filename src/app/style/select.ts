import { StylesConfig } from "react-select";

export const customStyles: StylesConfig = {
  control: (provided) => ({
    ...provided,
    background: "transparent",
    boxShadow: "none",
    outline: "none",
    border: "none",
    borderRadius: "0",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    fontSize: "20px",
    padding: "0.4rem 0",
    width: "100%",
    ":hover": {
      ...provided[":hover"],
      borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
      cursor: "pointer",
    },
  }),
  menu: (provided) => ({
    ...provided,
    background: "rgb(0,0,0)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    width: "100%",
  }),
  option: (provided, { isFocused }) => ({
    ...provided,
    background: isFocused ? "rgba(255, 105, 0, 0.7)" : "",
    cursor: "pointer",
    ":active": {
      ...provided[":active"],
      backgroundColor: "rgb(255, 105, 0)",
    },
  }),
  multiValue: (provided) => ({
    ...provided,
    background: "rgb(255, 105, 0)",
    borderRadius: "100px",
    fontSize: "16px",
    letterSpacing: "-4%",
    padding: "0.1rem 0.2rem",
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "0",
  }),
};
