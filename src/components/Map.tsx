import { useEffect, useRef } from "react";
import * as maptilersdk from "@maptiler/sdk";
import useWeatherStore from "@/stores/weatherStore";

export default function Map() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<maptilersdk.Map | null>(null);
  const current = useWeatherStore((state) => state.current);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_MAPTILER_API_KEY;
    if (!apiKey) return;
    maptilersdk.config.apiKey = apiKey;

    if (mapContainer.current && !mapInstance.current) {
      mapInstance.current = new maptilersdk.Map({
        container: mapContainer.current,
        style: maptilersdk.MapStyle.STREETS,
        center: current
          ? [current.location.lon, current.location.lat]
          : [-0.1276, 51.5072],
        zoom: 10,
      });
      mapInstance.current.addControl(
        new maptilersdk.NavigationControl(),
        "top-right"
      );
      mapInstance.current.on("load", () => {
        const controlContainer = mapContainer.current?.querySelector(
          ".maplibregl-control-container"
        );
        if (controlContainer && controlContainer.parentElement) {
          controlContainer.parentElement.removeChild(controlContainer);
        }
      });
    }

    return () => {
      mapInstance.current?.remove();
      mapInstance.current = null;
    };
  }, [current, current?.location]);

  return (
    current && (
      <div
        ref={mapContainer}
        style={{ height: 244 }}
        className="rounded-2xl bg-slate-950/5 overflow-hidden"
      />
    )
  );
}
