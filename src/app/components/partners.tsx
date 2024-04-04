import Marquee from "react-fast-marquee";
import Image from "next/image";
import partners from "./../data/partners.json";

export default function PartnersMarquee() {
  return (
    <Marquee gradient gradientColor="black" autoFill>
      <div className="flex justify-between gap-32 p-10 overflow-hidden">
        {partners.map((partner, index) => {
          return (
            <Image
              key={index}
              src={`/logos/${partner.img}`}
              width={96}
              height={96}
              style={{ objectFit: "contain" }}
              alt={`Logo ${partner.name}`}
            />
          );
        })}
      </div>
    </Marquee>
  );
}
