"use client";
import { Button } from "@mantine/core";
import { IconCheck, IconLoader2, IconRocket, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { REPO_NAME } from "../config/constants";

export default function DeployButton() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const triggerDeploy = async () => {
    if (status === "success") {
      window.open(`https://github.com/${REPO_NAME}/actions`, "_blank");
      return;
    }

    setLoading(true);
    setStatus("idle");

    try {
      const res = await fetch(
        `https://api.github.com/repos/${REPO_NAME}/actions/workflows/main.yml/dispatches`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_DEPLOY_TOKEN}`,
            Accept: "application/vnd.github+json",
          },
          body: JSON.stringify({ ref: "main" }),
        }
      );

      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const getButtonContent = () => {
    if (loading)
      return {
        label: "Läuft...",
        icon: <IconLoader2 size={18} className="animate-spin" />,
      };
    if (status === "success")
      return {
        label: "Veröffentlicht! Auf GitHub überprüfen",
        icon: <IconCheck size={18} />,
      };
    if (status === "error")
      return {
        label: "Fehler!",
        icon: <IconX size={18} />,
      };
    return {
      label: "Seite veröffentlichen",
      icon: <IconRocket size={18} />,
    };
  };

  if (process.env.NEXT_PUBLIC_VERCEL_ENV !== "preview") return null;

  const { label, icon } = getButtonContent();

  return (
    <div
      style={{
        position: "fixed",
        bottom: "2rem",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
      }}
    >
      <Button
        color={
          status === "error" ? "red" : status === "success" ? "orange" : "black"
        }
        variant="light"
        loading={loading}
        onClick={triggerDeploy}
        leftSection={icon}
        className="shadow-xl shadow-black/10 backdrop-blur-md"
      >
        {label}
      </Button>
    </div>
  );
}
