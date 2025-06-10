"use client";

export default function Map({
  zoom,
  destination,
}: {
  zoom?: number;
  destination?: string;
}) {
  return (
    <iframe
      title="Google Map"
      width="100%"
      height="480"
      data-cb-src={`https://www.google.com/maps/embed/v1/place?key=${
        process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
      }&q=${encodeURIComponent(destination || "CoMo Solution GmbH")}&zoom=${
        zoom || 11
      }`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      style={{
        borderRadius: "1rem",
        overflow: "hidden",
        boxShadow:
          "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
      }}
    />
  );
}
