import { Cloud } from "lucide-react";

export default function CityWeather() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-3 items-center">
        <Cloud size={22} />
        <p className="text-sm">London</p>
      </div>
      <p className="text-xs">Partly Cloudy</p>
    </div>
  );
}
