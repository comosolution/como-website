"use client";
import Checkbox from "@/app/components/checkbox";
import FormSuccess from "@/app/components/form";
import { HOOK_API } from "@/app/config/api";
import { card } from "@/app/style/style";
import { validateEmail } from "@/app/utils/utils";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import Button from "../../components/button";

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
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="Vorname *"
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Nachname *"
            onChange={handleChange}
          />
        </div>
        <input
          type="text"
          name="company"
          placeholder="Unternehmen"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="E-Mail *"
          onChange={handleChange}
        />
      </div>
      <Checkbox checked={privacy} onChange={() => setPrivacy(!privacy)}>
        <p>
          Ich habe die{" "}
          <Link href="/legal/privacy" target="_blank">
            Datenschutzhinweise
          </Link>{" "}
          zur Kenntnis genommen. Ich stimme zu, dass meine Daten zur Erfassung
          meiner Anmeldung elektronisch erhoben und gespeichert werden.
        </p>
      </Checkbox>
      <Button
        type="primary"
        text="Jetzt kostenlos anmelden"
        className="w-full flex justify-center"
        disabled={
          data.firstName.length === 0 ||
          data.lastName.length === 0 ||
          // data.company.length === 0 ||
          !validateEmail(data.email) ||
          !privacy
        }
      />
    </form>
  ) : (
    <FormSuccess />
  );
}
