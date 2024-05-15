import Button from "./button";
import { scrollTo } from "../utils/utils";

export default function ContactButton() {
  return (
    <Button
      type="contact"
      text="Jetzt anfragen"
      icon="arrow"
      onClick={() => scrollTo("contact")}
    />
  );
}
