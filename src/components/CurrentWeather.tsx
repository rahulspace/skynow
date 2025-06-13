import Image from "next/image";
import Card from "./Card";
import IconDetail from "./IconDetail";
import { Droplet, Sun, Waves, Wind } from "lucide-react";
import useWeatherStore from "@/stores/weatherStore";
import urlUtil from "@/utils/urlUtil";
import dateUtil from "@/utils/dateUtil";

export default function CurrentWeather() {
  const current = useWeatherStore((state) => state.current);

  return (
    current && (
      <Card>
        <div className="flex items-center justify-between">
          <h5>Current Weather</h5>
          <p>{current.location.name}</p>
        </div>
        <h6 className="text-xs text-slate-200 font-light">
          {dateUtil.epochToTime(current.location.localtime_epoch)}
        </h6>
        <div className="mt-4 flex gap-5">
          <Image
            src={urlUtil.appendWithHttps(current.current.condition.icon)}
            alt={current.current.condition.text}
            width={80}
            height={80}
          />
          <div>
            <div className="flex gap-1 mb-1">
              <h2 className="text-6xl font-bold">{current.current.temp_c}</h2>
              <h5 className="-mt-2">°C</h5>
            </div>
            <h6 className="text-sm">{current.current.condition.text}</h6>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <IconDetail icon={Waves} text={current.current.humidity} />
          <IconDetail icon={Droplet} text={`${current.current.precip_mm}mm`} />
          <IconDetail icon={Wind} text={`${current.current.wind_kph}km/h`} />
          <IconDetail icon={Sun} text={current.current.uv} />
        </div>
      </Card>
    )
  );
}
