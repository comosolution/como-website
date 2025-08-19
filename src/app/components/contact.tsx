"use client";
import {
  Button,
  Checkbox,
  Notification,
  Select,
  Textarea,
  TextInput,
} from "@mantine/core";
import {
  IconCheck,
  IconMail,
  IconPhone,
  IconSend,
  IconX,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { card, twoCols } from "../style/style";
import { validateEmail } from "../utils/utils";

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [privacy, setPrivacy] = useState(false);

  const pathname = usePathname();

  const handleChange = (e: ChangeEvent<any>) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/send-mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "kontaktanfrage",
        name: data.name,
        company: data.company,
        email: data.email,
        phone: data.phone,
        page: pathname,
        subject: `Neue Kontaktanfrage ${data.subject}`.trim(),
        message: data.message,
      }),
    });

    if (res.ok) {
      setSuccess(true);
    } else {
      setError("Es ist ein Fehler aufgetreten");
    }
  };

  return (
    <div className="relative isolate">
      <div className="absolute w-full h-full -z-10 bg-[var(--light)] clip-angled" />
      <main
        id="contact"
        className={`relative z-30 ${twoCols} mb-32 px-8 py-32`}
      >
        <div className="flex flex-col items-center gap-8 pt-8 lg:h-min lg:sticky lg:top-4">
          <div className="flex flex-col text-center">
            <header className="flex flex-col">
              <p className="text-orange-500">
                <b>Wir sind neugierig auf Ihre Anforderungen!</b>
              </p>
              <h2>
                Nehmen Sie jetzt <br /> Kontakt zu uns auf.
              </h2>
            </header>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 items-center">
            <Button
              variant="light"
              component="a"
              href="mailto:info@como-solution.de"
              leftSection={<IconMail size={16} />}
            >
              info@como-solution.de
            </Button>
            <Button
              color="red"
              variant="transparent"
              component="a"
              href="tel:+4991231833700"
              leftSection={<IconPhone size={16} />}
            >
              +49 9123 18337-00
            </Button>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className={`flex flex-col gap-4 p-8 ${card} shadow-2xl shadow-orange-500/20`}
        >
          <h4>Ihre Kontaktanfrage</h4>
          <div className={twoCols}>
            <TextInput
              name="name"
              label="Name"
              autoComplete="name"
              onChange={handleChange}
              withAsterisk
            />
            <TextInput
              name="firstName"
              label="Vorname"
              autoComplete="given-name"
              onChange={handleChange}
            />
          </div>
          <div className={twoCols}>
            <TextInput
              name="email"
              label="E-Mail"
              autoComplete="email"
              onChange={handleChange}
              withAsterisk
            />
            <TextInput
              name="phone"
              label="Telefon"
              autoComplete="tel"
              onChange={handleChange}
            />
          </div>
          <Select
            name="subject"
            label="Wofür interessieren Sie sich?"
            placeholder="Thema wählen"
            onChange={(value) => setData({ ...data, subject: value || "" })}
            data={[
              "Prozessoptimierung für Unternehmen",
              "Individuelle Softwarelösungen",
              "KI-Beratung für den Mittelstand",
              "Cybersecurity & Endpoint-Management",
              "Moderne Kommunikation",
              "Service & Betrieb von IT",
            ]}
            checkIconPosition="right"
            clearable
            searchable
            comboboxProps={{ shadow: "xl" }}
          />
          <Textarea
            name="message"
            label="Wie können wir Ihnen weiterhelfen?"
            placeholder="Hier ist Platz für Ihre Nachricht."
            rows={4}
            onChange={handleChange}
            withAsterisk
          />
          <Checkbox
            label={
              <>
                Ich habe die{" "}
                <Link href="/legal/privacy" target="_blank">
                  Datenschutzhinweise
                </Link>{" "}
                zur Kenntnis genommen. Ich stimme zu, dass meine Angaben und
                Daten zur Beantwortung meiner Anfrage elektronisch erhoben und
                gespeichert werden.
              </>
            }
            checked={privacy}
            onChange={() => setPrivacy(!privacy)}
          />
          {error && (
            <Notification
              withCloseButton={false}
              color="red"
              icon={<IconX size={16} />}
              title={error}
            >
              Bitte versuche es erneut.
            </Notification>
          )}
          {success && (
            <Notification
              withCloseButton={false}
              color="orange"
              icon={<IconCheck size={16} />}
              title="Kontaktanfrage abgeschickt!"
            >
              Wir melden uns in Kürze bei Ihnen.
            </Notification>
          )}
          <Button
            type="submit"
            leftSection={<IconSend size={16} />}
            disabled={
              data.name.trim().length === 0 ||
              !validateEmail(data.email) ||
              data.message.trim().length === 0 ||
              !privacy
            }
          >
            Jetzt Kontakt aufnehmen
          </Button>
        </form>
      </main>
    </div>
  );
}
