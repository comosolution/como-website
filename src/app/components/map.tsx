"use client";
import { mapStyle } from "@/app/style/map";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { IconMapX } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import Button from "./button";

export default function Map({
  position,
  zoom,
  destination,
}: {
  position?: google.maps.LatLng | google.maps.LatLngLiteral;
  zoom?: number;
  destination?: string;
}) {
  const [consentGiven, setConsentGiven] = useState<boolean | null>(null);

  const checkConsent = () => {
    if (window?.CookieConsent?.consent?.marketing) {
      setConsentGiven(true);
    } else {
      setConsentGiven(false);
    }
  };

  useEffect(() => {
    checkConsent();
    window.addEventListener("CookieConsentOnUpdate", checkConsent);

    setTimeout(
      () => window.dispatchEvent(new Event("CookieConsentOnUpdate")),
      200
    );

    return () =>
      window.removeEventListener("CookieConsentOnUpdate", checkConsent);
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const mapOptions = {
    disableDefaultUI: true,
    gestureHandling: "none",
    keyboardShortcuts: false,
    zoomControl: false,
    styles: mapStyle,
  };

  if (!isLoaded) return <></>;

  if (consentGiven === null) return <></>;

  if (!consentGiven) {
    return (
      <div className="w-full h-[480px] rounded-2xl backdrop-blur-sm bg-white/5 ring-1 ring-white/10 shadow-2xl overflow-hidden flex flex-col items-center justify-center gap-8 p-4">
        <IconMapX size={64} stroke={1} color="rgb(var(--red-rgb))" />
        <p className="muted text-center">
          Bitte akzeptieren Sie die Marketing Cookies um die Karte zu sehen.
        </p>
        <Button
          type="contact"
          text="Cookie Consent aktualisieren"
          onClick={() => window.Cookiebot?.show()}
        />
      </div>
    );
  }

  return (
    <div id="map" className="relative">
      <div className="w-full h-[480px] rounded-2xl ring-1 ring-white/10 shadow-2xl overflow-hidden">
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100%",
          }}
          zoom={zoom ? zoom : 11}
          center={position ? position : { lat: 49.51227, lng: 11.28143 }}
          options={mapOptions}
        />
      </div>
      <div
        className="absolute top-0 left-0 z-50 flex justify-center items-center"
        style={{ height: "480px", width: "100%" }}
      >
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${
            destination ? destination : "CoMo+Solution+GmbH"
          }`}
          target="_blank"
        >
          <div
            id="mapPin"
            className="relative w-16 h-16 rounded-full border-solid border border-orange-600 transition-all hover:w-20 hover:h-20 hover:bg-orange-600/20"
          />
        </a>
      </div>
    </div>
  );
}
