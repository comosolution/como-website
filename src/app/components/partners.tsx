import Marquee from "react-fast-marquee";
import Image from "next/image";
import partners from "./../data/partners.json";

export default function PartnersMarquee() {
  return (
    <Marquee gradient gradientColor="black" autoFill pauseOnHover>
      <div className="flex justify-between gap-24 p-16 overflow-hidden">
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
  );
}
