"use client";
import { Collapse } from "react-collapse";
import { ChangeEvent, useState } from "react";
import Button from "./button";

export default function Newsletter() {
  const [open, setOpen] = useState(false);
  const [newsletter, setNewsletter] = useState({
    mail: "",
    vorname: "",
    nachname: "",
  });

  const handleChange = (e: ChangeEvent<any>) =>
    setNewsletter({ ...newsletter, [e.target.name]: e.target.value });

  return (
    <div className="w-1/2 flex flex-col gap-4 p-8 items-center justify-center text-center">
      <div>
        <p className="muted">Immer informiert bleiben!</p>
        <h3>Der CoMo Newsletter</h3>
      </div>
      <form>
        <div className="flex gap-2 justify-between p-2 border-solid border border-orange-500 rounded-full">
          <input
            className="w-full ml-4 px-4 bg-black ghost"
            type="text"
            name="mail"
            placeholder="name@unternehmen.de *"
            onChange={handleChange}
          />
          <Button
            type="primary"
            text="Anmelden"
            disabled={newsletter.mail.length < 1}
          />
        </div>
        <Collapse isOpened={open}>
          <div className="grid grid-cols-2 gap-4 px-10 py-8 overflow-hidden">
            <select className="w-full appearance-none bg-black">
              <option disabled>(Anrede)</option>
              <option>Herr</option>
              <option>Frau</option>
              <option></option>
            </select>
            <select className="w-full appearance-none bg-black">
              <option disabled>(Titel)</option>
              <option>Dr.</option>
              <option>Prof.</option>
              <option>Prof. Dr.</option>
              <option></option>
            </select>
            <input
              type="text"
              name="vorname"
              placeholder="Vorname"
              onChange={handleChange}
            />
            <input
              type="text"
              name="nachname"
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
        iconRotation={open ? 180 : 0}
      />
    </div>
  );
}
