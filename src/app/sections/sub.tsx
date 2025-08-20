"use client";
import { useMediaQuery } from "@mantine/hooks";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
  const [width, setWidth] = useState(0);
  const measureRef = useRef<HTMLHeadingElement | null>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (measureRef.current) {
      setWidth(measureRef.current.offsetWidth);
    }
  }, [textIndex]);

  const startInterval = () => {
    if (intervalRef.current === null) {
      intervalRef.current = window.setInterval(() => {
        setTextIndex((prev) => (prev + 1) % serviceList.length);
      }, 1400);
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
      id="sub"
      className={`relative z-5 flex flex-col items-center gap-32 ${defaultPadding}`}
    >
      <div className="flex flex-col items-center text-center gap-4">
        <h2 onClick={handleClick} className="cursor-default select-none">
          Wir sind die <span className={highlight}>CoMo</span>.{" "}
          {isMobile && <br />}Wir{" "}
          <motion.span
            className="inline-block text-left align-top"
            animate={{ width }}
            transition={{ duration: 0.3 }}
            style={{ display: "inline-block", overflow: "hidden" }}
          >
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
          </motion.span>
        </h2>
        <p className="muted">
          Wie setzen Sie Ihr Digitalisierungsprojekt um? Wie gestalten Sie die
          Sicherheit Ihrer IT – und Ihrer Organisation? Wie sorgen Sie für den
          reibungslosen, kontinuierlichen Betrieb Ihrer Softwarelösungen und
          Anwendungen?
        </p>
        <p>
          Drei große Fragen … und eine Antwort:{" "}
          <b>Mit den Experten von CoMo Solution!</b>
        </p>
        {/* Hidden measuring element */}
        <h2
          ref={measureRef}
          className="absolute invisible pointer-events-none whitespace-nowrap"
          aria-hidden="true"
        >
          {serviceList[textIndex]}.
        </h2>
      </div>
    </section>
  );
}
