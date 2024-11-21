import { useEffect, useRef, useState } from "react";
import Button from "./button";

export default function Accordion({
  summary,
  details,
  isOpen,
}: {
  summary: string;
  details: string[];
  isOpen: boolean;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen, details]);

  return (
    <div className="pb-8">
      <div
        className="pt-4 w-full flex justify-between items-baseline gap-2"
        onClick={() => setOpen(!open)}
      >
        <h3>{summary}</h3>
        <Button
          type="tertiary"
          text={open ? "Weniger anzeigen" : "Mehr anzeigen"}
          onClick={() => setOpen(!open)}
          icon="chevron"
          iconRotation={open ? "180" : "0"}
        />
      </div>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? "max-h-[200px]" : "max-h-0"
        }`}
        style={{ maxHeight: open ? contentHeight : 0 }}
      >
        <div className="details">
          {details.map((d, index) => {
            return d.startsWith("- ") ? (
              <ul key={index}>
                <li>{d.substring(2)}</li>
              </ul>
            ) : (
              <p key={index}>{d}</p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
