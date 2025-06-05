import Image from "next/image";
import Card from "./Card";
import IconDetail from "./IconDetail";
import { Droplet, Sun, Waves, Wind } from "lucide-react";

export default function CurrentWeather() {
  return (
    <Card>
      <h5>Current Weather</h5>
      <h6 className="text-xs text-slate-200 font-light">6:25PM</h6>
      <div className="mt-4 flex gap-5">
        <Image src="" alt="weather" className="w-20 h-20" />
        <div>
          <div className="flex gap-1 mb-1">
            <h2 className="text-6xl font-bold">24</h2>
            <h5 className="-mt-2">°C</h5>
          </div>
          <h6 className="text-sm">Heavy Rain</h6>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <IconDetail icon={Waves} text="173" />
        <IconDetail icon={Droplet} text="92%" />
        <IconDetail icon={Wind} text="6km/h" />
        <IconDetail icon={Sun} text="3" />
      </div>
    </Card>
  );
}
