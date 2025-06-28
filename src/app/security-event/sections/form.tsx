"use client";
import FormSuccess from "@/app/components/form";
import { HOOK_API } from "@/app/config/constants";
import { card, twoCols } from "@/app/style/style";
import { validateEmail } from "@/app/utils/utils";
import { Button, Checkbox, TextInput } from "@mantine/core";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

export default function EventForm() {
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
  });
  const [privacy, setPrivacy] = useState(false);

  const handleChange = (e: ChangeEvent<any>) =>
    setData({ ...data, [e.target.name]: e.target.value });

  return !success ? (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        fetch(`${HOOK_API}&src=kontaktformular&type=EVENT_INVITE`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(
            {
              name: `${data.firstName} ${data.lastName}`,
              company: data.company,
              email: data.email,
              created: new Date(),
              type: "EVENT_INVITE",
              url: window.location.href,
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
      className={`flex flex-col gap-8 p-8 ${card} shadow-orange-500/20`}
    >
      <div className="flex flex-col gap-4">
        <h4>Ihre Anmeldung</h4>
        <div className={twoCols}>
          <TextInput
            name="firstName"
            label="Vorname"
            autoComplete="given-name"
            withAsterisk
            onChange={handleChange}
          />
          <TextInput
            name="lastName"
            label="Nachname"
            autoComplete="family-name"
            withAsterisk
            onChange={handleChange}
          />
        </div>
        <TextInput
          name="company"
          label="Unternehmen"
          autoComplete="organization"
          onChange={handleChange}
        />
        <TextInput
          name="email"
          label="E-Mail"
          autoComplete="email"
          withAsterisk
          onChange={handleChange}
        />
      </div>
      <Checkbox
        label={
          <>
            Ich habe die{" "}
            <Link href="/legal/privacy" target="_blank">
              Datenschutzhinweise
            </Link>{" "}
            zur Kenntnis genommen. Ich stimme zu, dass meine Angaben und Daten
            zur Beantwortung meiner Anfrage elektronisch erhoben und gespeichert
            werden.
          </>
        }
        checked={privacy}
        onChange={() => setPrivacy(!privacy)}
      />
      <Button
        type="submit"
        disabled={
          data.firstName.trim().length === 0 ||
          data.lastName.trim().length === 0 ||
          !validateEmail(data.email) ||
          !privacy
        }
      >
        Jetzt kostenlos anmelden
      </Button>
    </form>
  ) : (
    <FormSuccess
      header="Ihre Anmeldung ist eingegangen. Sie erhalten rechtzeitig vor dem Event alle wichtigen Infos per Mail."
      message="Vielen Dank, wir freuen uns auf Ihre Teilnahme!"
    />
  );
}
