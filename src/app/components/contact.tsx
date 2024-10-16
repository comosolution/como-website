"use client";
import { card, twoCols } from "../style/style";
import Button from "./button";
import Checkbox from "./checkbox";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { validateEmail } from "../utils/utils";
import FormSuccess from "./form";
import { HOOK_API } from "../config/api";
import { usePathname } from "next/navigation";
import ReactSelect, { MultiValue } from "react-select";
import { customStyles } from "../style/select";
import { options } from "../config/options";

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
  const [topics, setTopics] = useState<MultiValue<unknown>>();
  const [privacy, setPrivacy] = useState(false);

  const handleCheck = (newValue: MultiValue<unknown>) => {
    setTopics(newValue.map((t: any) => t.label));
  };

  const pathname = usePathname();

  const handleChange = (e: ChangeEvent<any>) =>
    setData({ ...data, [e.target.name]: e.target.value });

  return (
    <main id="contact" className={`relative z-5 ${twoCols} my-32 px-8 py-16`}>
      <div className="flex flex-col items-center gap-12 pt-8 lg:h-min lg:sticky lg:top-4">
        <div className="flex flex-col text-center">
          <header className="flex flex-col">
            <p className="text-orange-500">
              <b>Sprechen Sie uns an.</b>
            </p>
            <h2>Wir sind bereit, gemeinsam mit Ihnen durchzustarten!</h2>
          </header>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <Button
            type="contact"
            text="info@como-solution.de"
            href="mailto:info@como-solution.de"
          />
          <Button
            type="tertiary"
            text="+49 9123 18337-00"
            href="tel:+4991231833700"
          />
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
                  topics: topics,
                  message: data.message,
                },
                null,
                2
              ),
            })
              .then((res) => res.text())
              .then((data) => {
                setSuccess(true);
              })
              .catch((error) => console.error(error));
          }}
          className={`flex flex-col gap-8 p-8 ${card} shadow-2xl shadow-orange-500/20`}
        >
          <div className="flex flex-col gap-4">
            <h4>Ihre Daten</h4>
            <div className={twoCols}>
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
              placeholder="Unternehmen *"
              onChange={handleChange}
            />
            <div className={twoCols}>
              <input
                type="text"
                name="email"
                placeholder="E-Mail *"
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Telefon"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4>Ihre Nachricht</h4>
            <ReactSelect
              placeholder="Wofür interessieren Sie sich?"
              options={options}
              isClearable={false}
              isMulti
              styles={customStyles}
              classNamePrefix="react-select"
              onChange={handleCheck}
              noOptionsMessage={() => <p>Keine Treffer</p>}
            />
            <textarea
              name="message"
              placeholder="Wie können wir Ihnen weiterhelfen? *"
              rows={4}
              onChange={handleChange}
            />
            <p className="small muted">* Pflichtfelder</p>
          </div>
          <Checkbox checked={privacy} onChange={() => setPrivacy(!privacy)}>
            <p>
              Ich habe die{" "}
              <Link href="/legal/privacy" target="_blank">
                Datenschutzhinweise
              </Link>{" "}
              zur Kenntnis genommen. Ich stimme zu, dass meine Angaben und Daten
              zur Beantwortung meiner Anfrage elektronisch erhoben und
              gespeichert werden.
            </p>
          </Checkbox>
          <Button
            type="primary"
            text="Jetzt Kontakt aufnehmen"
            className="w-full flex justify-center"
            disabled={
              data.firstName.length === 0 ||
              data.lastName.length === 0 ||
              data.company.length === 0 ||
              !validateEmail(data.email) ||
              data.message.length === 0 ||
              !privacy
            }
          />
        </form>
      ) : (
        <FormSuccess />
      )}
    </main>
  );
}
