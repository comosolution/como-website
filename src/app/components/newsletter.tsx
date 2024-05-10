"use client";
import { Collapse } from "react-collapse";
import { ChangeEvent, useState } from "react";
import Button from "./button";
import { validateEmail } from "../utils/utils";

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
    <div className="relative z-1 md:col-span-2 flex flex-col gap-4 p-8 items-center justify-center text-center">
      <div>
        <p className="muted">Immer informiert bleiben!</p>
        <h3>Der CoMo Newsletter</h3>
      </div>
      <form
        action="https://seu2.cleverreach.com/f/283459-283561/wcs/"
        method="post"
        target="_blank"
      >
        <div className="flex gap-2 justify-between p-2 border-solid border border-orange-500 rounded-full backdrop-blur-sm bg-neutral-900/70">
          <input
            id="text6226376"
            className="w-full ml-4 px-4 ghost"
            name="email"
            type="text"
            placeholder="name@unternehmen.de *"
            onChange={handleChange}
          />
          <Button
            type="primary"
            text="Anmelden"
            disabled={!validateEmail(newsletter.email)}
          />
        </div>
        <Collapse isOpened={open}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-4 px-10 py-8 overflow-hidden">
            <select
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
            </select>
            <input
              id="text6226471"
              name="1055887"
              type="text"
              placeholder="Vorname"
              onChange={handleChange}
            />
            <input
              id="text6226497"
              name="1055888"
              type="text"
              placeholder="Nachname"
              onChange={handleChange}
            />
          </div>
        </Collapse>
      </form>
      <Button
        type="tertiary"
        text="Newsletter personalisieren"
        onClick={() => setOpen(!open)}
        icon="chevron"
        iconRotation={open ? "180" : "0"}
      />
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
      className="flex gap-4"
    >
      <input
        type="text"
        name="email"
        placeholder="name@unternehmen.de *"
        onChange={handleChange}
      />
      <Button
        type="secondary"
        text="Abmelden"
        disabled={!validateEmail(email)}
      />
    </form>
  );
}
