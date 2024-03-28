"use client";
import Image from "next/image";
import { scrollTo } from "../utils/utils";
import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";

export default function FAB() {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    setShow(window.scrollY > 600 ? true : false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    show && (
      <div
        className="fixed right-8 bottom-8 z-50 p-2 border-solid border border-orange-500 shadow-lg shadow-orange-500/50 rounded-full cursor-pointer transition-all hover:bg-orange-600/20"
        onClick={() => scrollTo("top")}
      >
        <Image
          src="/icons/arrow.svg"
          width="20"
          height="20"
          alt="arrow"
          className="rotate-180"
        />
      </div>
    )
  );
}
