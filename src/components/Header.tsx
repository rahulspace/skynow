import { Locate } from "lucide-react";
import LocationSearch from "./LocationSearch";
import { useGeolocation } from "@/hooks/useGeolocation";
import useWeatherStore from "@/stores/weatherStore";
import { useEffect } from "react";
import Button from "./Button";

export default function Header() {
  const replaceLocation = useWeatherStore((state) => state.replaceLocation);
  const { location, getLocation } = useGeolocation();

  const handleLocationClick = () => {
    getLocation();
  };

  useEffect(() => {
    if (location) replaceLocation(`${location.lat},${location.lng}`);
  }, [location, replaceLocation]);

  return (
    <div className="flex justify-between items-center">
      <div className="max-w-52">
        <LocationSearch />
      </div>
      <div>
        <Button icon={Locate} onClick={handleLocationClick} />
      </div>
    </div>
  );
}
