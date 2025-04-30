import { Accordion as MantineAccordion } from "@mantine/core";
import { useEffect, useRef, useState } from "react";

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
    <MantineAccordion variant="separated" className="pb-8">
      <MantineAccordion.Item value={summary}>
        <MantineAccordion.Control className="text-2xl">
          {summary}
        </MantineAccordion.Control>
        <MantineAccordion.Panel>
          {details.map((d, index) => {
            return d.startsWith("- ") ? (
              <ul key={index}>
                <li>{d.substring(2)}</li>
              </ul>
            ) : (
              <p key={index}>{d}</p>
            );
          })}
        </MantineAccordion.Panel>
      </MantineAccordion.Item>
    </MantineAccordion>
  );
}
