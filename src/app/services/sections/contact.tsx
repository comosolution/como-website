import Button from "@/app/components/button";
import { scrollTo } from "@/app/utils/utils";

export default function Contact() {
  return (
    <section className="flex justify-between items-center gap-8 px-8 py-24">
      <div>
        <h2>Interessiert? </h2>
        <h5 className="muted">Oder noch nichts passendes gefunden?</h5>
      </div>
      <Button
        type="primary"
        text="Jetzt kontaktieren"
        icon="arrow"
        onClick={() => scrollTo("contact")}
      />
    </section>
  );
}
