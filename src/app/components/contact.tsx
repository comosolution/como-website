import { header } from "../style/style";
import Button from "./button";

export default function Contact() {
  return (
    <main
      id="contact"
      className="relative z-5 flex flex-col items-center gap-8 mt-32 p-16"
    >
      <div className="flex flex-col text-center">
        <h3 className="muted">Maximieren Sie Ihr digitales Potenzial</h3>
        <h1>Wir sind bereit, gemeinsam mit Ihnen durchzustarten.</h1>
      </div>
      <div className={header}>
        <Button
          type="primary"
          text="info@como-solution.de"
          href="mailto:info@como-solution.de"
        />
        <Button
          type="tertiary"
          text="+49 9123 18337-00"
          href="tel:+4991231833700"
        />
      </div>
    </main>
  );
}
