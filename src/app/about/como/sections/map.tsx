"use client";
import { mapStyle } from "@/app/style/map";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

export default function Map() {
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

  return (
    <div id="map" className="relative">
      <div className="w-full h-[480px] rounded-2xl ring-1 ring-white/10 shadow-2xl overflow-hidden">
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100%",
          }}
          zoom={11}
          center={{ lat: 49.51227, lng: 11.28143 }}
          options={mapOptions}
        />
      </div>
      <div
        className="absolute top-0 left-0 z-50 flex justify-center items-center"
        style={{ height: "480px", width: "100%" }}
      >
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=CoMo+Solution+GmbH"
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
