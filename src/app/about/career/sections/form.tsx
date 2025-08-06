"use client";
import {
  Button,
  Container,
  FileInput,
  Group,
  Notification,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";
import { useState } from "react";

export default function CareerForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    file: null as File | null,
  });

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
        message: form.message,
        filename: form.file?.name,
        filetype: form.file?.type,
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
    <Container size="sm" mt="lg">
      <Title order={2} mb="md">
        Contact Us
      </Title>

      <form onSubmit={handleSubmit}>
        <TextInput
          label="Name"
          value={form.name}
          onChange={(e) => handleChange("name", e.currentTarget.value)}
          required
          mb="sm"
        />
        <TextInput
          label="Email"
          type="email"
          value={form.email}
          onChange={(e) => handleChange("email", e.currentTarget.value)}
          required
          mb="sm"
        />
        <Textarea
          label="Message"
          value={form.message}
          onChange={(e) => handleChange("message", e.currentTarget.value)}
          required
          mb="sm"
        />
        <FileInput
          label="Attach PDF (optional)"
          accept="application/pdf"
          value={form.file}
          onChange={(file) => handleChange("file", file)}
          mb="sm"
        />
        <Group mt="md">
          <Button type="submit" loading={status === "sending"}>
            Send Message
          </Button>
        </Group>
      </form>

      {status === "success" && (
        <Notification
          mt="lg"
          color="green"
          icon={<IconCheck size={16} />}
          title="Success"
        >
          Your message has been sent!
        </Notification>
      )}
      {status === "error" && (
        <Notification
          mt="lg"
          color="red"
          icon={<IconX size={16} />}
          title="Error"
        >
          Something went wrong. Please try again.
        </Notification>
      )}
    </Container>
  );
}
