import Image from "next/image";
import card from "./card";

export default function FormSuccess({ message }: { message?: string }) {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-4 p-8 ${card}`}
    >
      <Image src="/icons/check.svg" width={64} height={64} alt="Check" />
      <div className="flex flex-col items-center">
        <p className="text-orange-500">Vielen Dank!</p>
        <p className="muted">
          {message ? message : "Wir melden uns zeitnah bei Ihnen."}
        </p>
      </div>
    </div>
  );
}
