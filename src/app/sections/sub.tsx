"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { highlight } from "../style/style";

export default function Sub() {
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
    <section className="relative z-5 flex justify-center gap-2 pt-16">
      <h2 onClick={handleClick} className="cursor-default select-none">
        Wir sind die <span className={highlight}>CoMo</span>. Wir{" "}
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
