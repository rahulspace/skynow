"use client";

import CitiesWeather from "@/components/CitiesWeather";
import CurrentWeather from "@/components/CurrentWeather";
import Map from "@/components/Map";
import { useGeolocation } from "@/hooks/useGeolocation";
import { useEffect } from "react";
import useWeatherStore from "@/stores/weatherStore";
import Forecast from "@/components/Forecast";
import Summary from "@/components/Summary";
import Header from "@/components/Header";

export default function Home() {
  const { location } = useGeolocation();
  const replaceLocation = useWeatherStore((state) => state.replaceLocation);

  useEffect(() => {
    if (location) replaceLocation(`${location.lat},${location.lng}`);
  }, [location, replaceLocation]);

  return (
    <div className="font-bold min-h-screen">
      <div className="flex flex-col gap-8 p-5 container mx-auto">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="w-full md:col-span-2 xl:col-span-1">
            <CurrentWeather />
          </div>
          <div className="w-full md:col-span-2 xl:col-span-2">
            <Map />
          </div>
          <div className="w-full md:col-span-2 xl:col-span-1">
            <CitiesWeather />
          </div>
          <div className="w-full md:col-span-2 xl:col-span-1">
            <Forecast />
          </div>
          <div className="w-full md:col-span-4 xl:col-span-3">
            <Summary />
          </div>
        </div>
      </div>
    </div>
  );
}
