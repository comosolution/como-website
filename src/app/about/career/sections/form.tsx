"use client";
import { card, twoCols } from "@/app/style/style";
import { validateEmail } from "@/app/utils/utils";
import {
  Button,
  Checkbox,
  FileInput,
  Notification,
  TextInput,
  Textarea,
} from "@mantine/core";
import { IconCheck, IconId, IconMail, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

export default function CareerForm({ subject }: { subject: string }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    file: null as File | null,
  });
  const [privacy, setPrivacy] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (field: string, value: any) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    let base64 = "";
    if (form.file) {
      const reader = await readFileAsBase64(form.file);
      base64 = reader.split(",")[1];
    }

    const res = await fetch("/api/send-mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        subject: subject,
        message: form.message,
        filename: form.file?.name,
        content: base64,
      }),
    });

    if (res.ok) {
      setStatus("success");
      setForm({ name: "", email: "", message: "", file: null });
    } else {
      setStatus("error");
    }
  };

  const readFileAsBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
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
                <b>Klingt nach dir?</b>
              </p>
              <h2>Dann schick uns jetzt deine Bewerbung zu</h2>
            </header>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 items-center">
            <Button
              variant="light"
              component="a"
              href={`mailto:info@como-solution.de?subject=${subject}`}
              leftSection={<IconMail size={16} />}
            >
              info@como-solution.de
            </Button>
          </div>
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className={`flex flex-col gap-4 p-8 ${card} shadow-2xl shadow-orange-500/20`}
          >
            <h4>Deine Bewerbung</h4>
            <div className={twoCols}>
              <TextInput
                label="Name"
                value={form.name}
                onChange={(e) => handleChange("name", e.currentTarget.value)}
                withAsterisk
              />
              <TextInput
                label="E-Mail"
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.currentTarget.value)}
                withAsterisk
              />
            </div>
            <Textarea
              label="Deine Nachricht"
              rows={4}
              value={form.message}
              onChange={(e) => handleChange("message", e.currentTarget.value)}
              withAsterisk
            />
            <FileInput
              label="Dein Lebenslauf"
              accept="application/pdf"
              rightSection={<IconId size={16} />}
              value={form.file}
              onChange={(file) => handleChange("file", file)}
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
              color="red"
              type="submit"
              loading={status === "sending"}
              fullWidth
              disabled={
                form.name.trim().length === 0 ||
                !validateEmail(form.email) ||
                form.message.trim().length === 0 ||
                !privacy
              }
            >
              Jetzt bewerben
            </Button>
          </form>
          {status === "success" && (
            <Notification
              mt="lg"
              color="green"
              icon={<IconCheck size={16} />}
              title="Bewerbungsunterlagen abgeschickt!"
            >
              Wir melden uns in Kürze bei dir.
            </Notification>
          )}
          {status === "error" && (
            <Notification
              mt="lg"
              color="red"
              icon={<IconX size={16} />}
              title="Oh, da ist etwas schief gegangen."
            >
              Bitte versuche es erneut.
            </Notification>
          )}
        </div>
      </main>
    </div>
  );
}
