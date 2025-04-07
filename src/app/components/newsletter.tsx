"use client";
import { Button, TextInput } from "@mantine/core";
import { ChangeEvent, useEffect, useState } from "react";
import { twoCols } from "../style/style";
import { validateEmail } from "../utils/utils";
import Divider from "./divider";

export default function NewsletterSubscribe() {
  const [open, setOpen] = useState(false);
  const [newsletter, setNewsletter] = useState({
    email: "",
    "1055885": "",
    "1055886": "",
    "1055887": "",
    "1055888": "",
  });

  const handleChange = (e: ChangeEvent<any>) =>
    setNewsletter({ ...newsletter, [e.target.name]: e.target.value });

  return (
    <div className={twoCols}>
      <div className="p-8">
        <h3>Der CoMo Newsletter</h3>
        <Divider />
        <p>
          Unsere Short-News sind der direkte Draht zu den neusten Entwicklungen
          rund um die CoMo. Hier bekommen Sie alle wichtigen Infos – sei es zu
          bevorstehenden Veranstaltungen, frischen Releases in der Softwarewelt
          oder spannenden Updates zu unseren Partnern.
        </p>
      </div>
      <form
        action="https://seu2.cleverreach.com/f/283459-283561/wcs/"
        method="post"
        target="_blank"
        className="flex flex-col gap-2 p-8"
      >
        <TextInput
          id="text6226376"
          name="email"
          label="E-Mail"
          onChange={handleChange}
          withAsterisk
        />
        <div className={twoCols}>
          <TextInput
            id="text6226471"
            name="1055887"
            label="Vorname"
            onChange={handleChange}
          />
          <TextInput
            id="text6226497"
            name="1055888"
            label="Nachname"
            onChange={handleChange}
          />
        </div>
        {/* <select
              id="select_6252620"
              className="cr_font w-full appearance-none"
              name="1055885"
              onChange={handleChange}
            >
              <option value="1">(Anrede)</option>
              <option value="Frau">Frau</option>
              <option value="Herr">Herr</option>
            </select>
            <select
              id="select_6226473"
              className="cr_font w-full appearance-none"
              name="1055886"
              onChange={handleChange}
            >
              <option value="1">(Titel)</option>
              <option value="Dr.">Dr.</option>
              <option value="Prof.">Prof.</option>
              <option value="Prof. Dr.">Prof. Dr.</option>
            </select> */}
        <ReCaptcha />
        <Button
          type="submit"
          disabled={!validateEmail(newsletter.email)}
          fullWidth
        >
          Anmelden
        </Button>
      </form>
    </div>
  );
}

export function NewsletterUnsubscribe() {
  const [email, setEmail] = useState("");

  const handleChange = (e: ChangeEvent<any>) => setEmail(e.target.value);

  return (
    <form
      action="https://seu2.cleverreach.com/f/283459-283561/wcu/"
      method="post"
      target="_blank"
      className="flex items-end gap-4"
    >
      <TextInput name="email" label="E-Mail" onChange={handleChange} />
      <Button type="submit" disabled={!validateEmail(email)}>
        Abmelden
      </Button>
    </form>
  );
}

const ReCaptcha = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (!isClient) return null;

  return (
    <div
      id="8915730"
      rel="recaptcha"
      className="cr_ipe_item ui-sortable musthave flex justify-center mt-4"
    >
      <br />
      <div
        id="recaptcha_v2_widget"
        className="g-recaptcha"
        data-theme="light"
        data-size="normal"
        data-sitekey="6Lfhcd0SAAAAAOBEHmAVEHJeRnrH8T7wPvvNzEPD"
      ></div>
      <br />
    </div>
  );
};
