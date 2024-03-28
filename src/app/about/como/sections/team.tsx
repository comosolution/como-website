"use client";
import Button from "@/app/components/button";
import Image from "next/image";

export default function Team() {
  return (
    <section className="flex flex-col gap-16 text-center p-8">
      <h2>Das Team</h2>
      <div className="grid grid-cols-5 gap-16 place-items-center">
        {[...new Array(15)].map((a, index) => {
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
        <div className="flex gap-8 items-center col-span-5 rounded-full ">
          <Image src="/user.svg" width={120} height={120} alt="User Image" />
          <div>
            <h3>Ihr Bild fehlt? Jetzt bewerben:</h3>
            <Button
              type="primary"
              text="jobs@como-solution.de"
              href="mailto:jobs@como-solution.de"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
