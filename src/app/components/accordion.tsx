import { Accordion as MantineAccordion } from "@mantine/core";

export default function Accordion({
  summary,
  details,
}: {
  summary: string;
  details: string[];
}) {
  return (
    <MantineAccordion
      variant="separated"
      chevronPosition="left"
      className="pb-8"
    >
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
