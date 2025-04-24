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
      className="rounded-2xl ring-1 ring-white/10 shadow-2xl overflow-hidden"
      data-cb-src={`https://www.google.com/maps/embed/v1/place?key=${
        process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
      }&q=${encodeURIComponent(destination || "CoMo Solution GmbH")}&zoom=${
        zoom || 11
      }`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
