import Marquee from "react-fast-marquee";
import Image from "next/image";
import partners from "./../data/partners.json";

export default function Partners() {
  return (
    <section className="w-full overflow-hidden flex flex-col items-center gap-8 py-8">
      <h3 className="text-center">
        Mit der CoMo und ihren Partnern zum Erfolg
      </h3>
      <Marquee gradient gradientColor="black" autoFill>
        <div className="flex justify-between gap-20 p-10">
          {partners.map((partner, index) => {
            return (
              <Image
                key={index}
                src={`/logos/${partner.img}`}
                width={120}
                height={120}
                style={{ objectFit: "contain" }}
                alt={`Logo ${partner.name}`}
              />
            );
          })}
        </div>
      </Marquee>
    </section>
  );
}
