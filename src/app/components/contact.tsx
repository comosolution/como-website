"use client";
import { Button, Checkbox, Textarea, TextInput } from "@mantine/core";
import { IconMail, IconPhone } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { HOOK_API } from "../config/api";
import { card, twoCols } from "../style/style";
import { validateEmail } from "../utils/utils";
import FormSuccess from "./form";

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [privacy, setPrivacy] = useState(false);

  const pathname = usePathname();

  const handleChange = (e: ChangeEvent<any>) =>
    setData({ ...data, [e.target.name]: e.target.value });

  return (
    <main id="contact" className={`relative z-5 ${twoCols} my-32 px-8 py-16`}>
      <div className="flex flex-col items-center gap-8 pt-8 lg:h-min lg:sticky lg:top-4">
        <div className="flex flex-col text-center">
          <header className="flex flex-col">
            <p className="text-orange-500">
              <b>Wir sind neugierig auf Ihre Anforderungen!</b>
            </p>
            <h2>
              Nehmen Sie jetzt <br /> Kontakt zu uns auf!
            </h2>
          </header>
        </div>
        <div className="flex gap-2 items-center">
          <Button
            variant="light"
            component="a"
            href="mailto:info@como-solution.de"
            leftSection={<IconMail size={16} />}
          >
            info@como-solution.de
          </Button>
          <Button
            variant="transparent"
            component="a"
            href="tel:+4991231833700"
            leftSection={<IconPhone size={16} />}
          >
            +49 9123 18337-00
          </Button>
        </div>
      </div>
      {!success ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetch(`${HOOK_API}&src=kontaktformular`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(
                {
                  name: `${data.firstName} ${data.lastName}`,
                  company: data.company,
                  email: data.email,
                  phone: data.phone,
                  page: pathname,
                  message: data.message,
                },
                null,
                2
              ),
            })
              .then((res) => res.text())
              .then(() => {
                setSuccess(true);
              })
              .catch((error) => console.error(error));
          }}
          className={`flex flex-col gap-4 p-8 ${card} shadow-2xl shadow-orange-500/20`}
        >
          <h4>Ihre Kontaktanfrage</h4>
          <div className={twoCols}>
            <TextInput
              name="firstName"
              label="Vorname"
              onChange={handleChange}
              withAsterisk
            />
            <TextInput
              name="lastName"
              label="Nachname"
              onChange={handleChange}
              withAsterisk
            />
          </div>
          <TextInput
            name="company"
            label="Unternehmen"
            onChange={handleChange}
            withAsterisk
          />
          <div className={twoCols}>
            <TextInput
              name="email"
              label="E-Mail"
              onChange={handleChange}
              withAsterisk
            />
            <TextInput name="phone" label="Telefon" onChange={handleChange} />
          </div>
          <Textarea
            label="Ihre Nachricht"
            name="message"
            placeholder="Wie können wir Ihnen weiterhelfen?"
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
          <Button
            disabled={
              data.firstName.length === 0 ||
              data.lastName.length === 0 ||
              data.company.length === 0 ||
              !validateEmail(data.email) ||
              data.message.length === 0 ||
              !privacy
            }
          >
            Jetzt Kontakt aufnehmen
          </Button>
        </form>
      ) : (
        <FormSuccess />
      )}
    </main>
  );
}
