import { IconCircleCheckFilled } from "@tabler/icons-react";
import card from "./card";

export default function FormSuccess({
  header,
  message,
}: {
  header?: string;
  message?: string;
}) {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-4 p-8 ${card}`}
    >
      <IconCircleCheckFilled size={64} color="rgb(var(--accent-rgb))" />
      <div className="flex flex-col items-center text-center">
        <p className="text-orange-500">{header ? header : "Vielen Dank!"}</p>
        <p className="muted">
          {message ? message : "Wir melden uns zeitnah bei Ihnen."}
        </p>
      </div>
    </div>
  );
}
