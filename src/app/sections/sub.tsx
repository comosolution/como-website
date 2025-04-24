"use client";
import { useMediaQuery } from "@mantine/hooks";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Divider from "../components/divider";
import { defaultPadding, highlight } from "../style/style";

export default function Sub() {
  const isMobile = useMediaQuery("(max-width: 760px)");

  const serviceList = [
    "analysieren",
    "beraten",
    "planen",
    "entwickeln",
    "realisieren",
    "migrieren",
    "installieren",
    "managen",
    "supporten",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef<number | null>(null);

  const startInterval = () => {
    if (intervalRef.current === null) {
      intervalRef.current = window.setInterval(() => {
        setTextIndex((prev) => (prev + 1) % serviceList.length);
      }, 2000);
    }
  };

  const stopInterval = () => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startInterval();
    return () => stopInterval();
  }, []);

  const handleClick = () => {
    setIsRunning((prev) => {
      const next = !prev;
      if (next) {
        startInterval();
      } else {
        stopInterval();
      }
      return next;
    });
  };

  return (
    <section
      className={`relative z-5 flex flex-col items-center gap-32 ${defaultPadding} pt-16`}
    >
      <div className="flex flex-col items-center text-center gap-2">
        <h3>Ihr Partner für smarte IT-Lösungen</h3>
        <Divider />
        <div className="muted">
          <p>Wie setzen Sie Ihr Digitalisierungsprojekt um?</p>
          <p>
            Wie gestalten Sie die Sicherheit Ihrer IT – und Ihrer Organisation?
          </p>
          <p>
            Wie sorgen Sie für den reibungslosen, kontinuierlichen Betrieb Ihrer
            Softwarelösungen und Anwendungen?
          </p>
          <p>
            Drei große Fragen … und eine Antwort: mit den Experten von CoMo
            Solution!
          </p>
        </div>
      </div>
      <h2 onClick={handleClick} className="cursor-default select-none">
        Wir sind die <span className={highlight}>CoMo</span>.{" "}
        {isMobile && <br />}Wir{" "}
        <span className="inline-block w-64">
          <AnimatePresence mode="wait">
            <motion.span
              key={serviceList[textIndex]}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-block"
            >
              {serviceList[textIndex]}.
            </motion.span>
          </AnimatePresence>
        </span>
      </h2>
    </section>
  );
}
