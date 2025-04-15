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
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
    const interval = window.setInterval(() => {
      setTextIndex((prev) => (prev + 1) % serviceList.length);
    }, 2000);
    intervalRef.current = interval;

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <section className="relative z-5 flex justify-center gap-2 pt-16">
      <h2>
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
