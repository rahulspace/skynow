"use client";

import CitiesWeather from "@/components/CitiesWeather";
import CurrentWeather from "@/components/CurrentWeather";
import Map from "@/components/Map";
import LocationSearch from "@/components/LocationSearch";
import { useGeolocation } from "@/hooks/useGeolocation";
import { useEffect } from "react";
import useWeatherStore from "@/stores/weatherStore";

export default function Home() {
  const { location } = useGeolocation();
  const replaceLocation = useWeatherStore((state) => state.replaceLocation);

  useEffect(() => {
    if (location) replaceLocation(`${location.lat},${location.lng}`);
  }, [location, replaceLocation]);

  return (
    <div className="font-bold min-h-screen bg-linear-65 from-fuchsia-300 to-fuchsia-200 flex flex-col gap-8 p-5">
      <div className="max-w-52">
        <LocationSearch />
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
        <CurrentWeather />
        <div className="md:col-span-2">
          <Map center={[-0.1276, 51.5072]} />
        </div>
        <CitiesWeather />
      </div>
    </div>
  );
}
