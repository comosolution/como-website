"use client";
import Button from "@/app/components/button";
import Image from "next/image";

export default function Team() {
  return (
    <section className="flex flex-col gap-16 text-center p-8">
      <h2>Das Team</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 place-items-center">
        {[...new Array(16)].map((a, index) => {
          return (
            <Image
              key={index}
              src="/user.svg"
              width={120}
              height={120}
              alt="User Image"
            />
          );
        })}
      </div>
      <div className="flex flex-col xl:flex-row gap-4 justify-between items-center">
        <h5>Ihr Bild fehlt? Schicken Sie uns gerne Ihre Bewerbung!</h5>
        <Button
          type="primary"
          text="jobs@como-solution.de"
          href="mailto:jobs@como-solution.de"
        />
      </div>
    </section>
  );
}
