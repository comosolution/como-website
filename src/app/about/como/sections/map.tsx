"use client";
import { mapStyle } from "@/app/style/map";
import React, { useEffect, useRef } from "react";

export default function Map() {
  const mapRef = useRef<any>(null);
  const style = { height: "480px", width: "100%" };

  useEffect(() => {
    const googleMapsScript = document.createElement("script");
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
    googleMapsScript.async = true;
    googleMapsScript.defer = true;
    googleMapsScript.addEventListener("load", async () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 49.51227, lng: 11.28143 },
        zoom: 11,
        disableDefaultUI: true,
        gestureHandling: "none",
        keyboardShortcuts: false,
        zoomControl: false,
        styles: mapStyle,
      });
    });
    document.body.appendChild(googleMapsScript);
  }, []);

  return (
    <div id="map" className="relative">
      <div ref={mapRef} className="rounded-2xl" style={style} />
      <div
        className="absolute top-0 left-0 z-50 flex justify-center items-center"
        style={style}
      >
        <div className="w-16 h-16 rounded-full border-solid border border-orange-600 transition-all hover:bg-orange-600/20" />
      </div>
    </div>
  );
}
