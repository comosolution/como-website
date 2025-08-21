import React from "react";

export default function Hero({
  children,
  title,
  coverImage,
  coverAlt,
}: {
  children?: React.ReactNode;
  title: string;
  coverImage: string | null;
  coverAlt: string;
}) {
  return (
    <div id="hero" className="relative w-screen min-h-[50vh] -mt-32">
      <img
        src={coverImage || ""}
        alt={coverAlt || ""}
        className="absolute inset-0 w-full h-[50vh] object-cover object-center"
        style={{ filter: "brightness(0.8)" }}
      />
      <div className="absolute inset-0 w-full h-[50vh] bg-gradient-to-t from-[rgba(var(--background-rgb),1)] from-25% via-transparent to-[rgba(var(--background-rgb),0.2)]" />
      <header className="relative z-10 h-[50vh] max-w-[1440px] mx-auto flex flex-col justify-end items-center text-center px-8 md:px-16">
        {children}
        <h1 className="text-center">{title}</h1>
      </header>
    </div>
  );
}
