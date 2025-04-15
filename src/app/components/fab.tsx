"use client";
import { IconArrowUp } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { scrollTo } from "../utils/utils";

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
        className="fixed right-8 bottom-8 z-50 p-2 border-solid border border-orange-500 rounded-full cursor-pointer transition-all hover:bg-orange-600/20"
        onClick={() => scrollTo("top")}
      >
        <IconArrowUp size={20} />
      </div>
    )
  );
}
