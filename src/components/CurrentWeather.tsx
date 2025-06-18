import Image from "next/image";
import Card from "./Card";
import IconDetail from "./IconDetail";
import { Droplet, Sun, Waves, Wind } from "lucide-react";
import useWeatherStore from "@/stores/weatherStore";
import urlUtil from "@/utils/urlUtil";
import dateUtil from "@/utils/dateUtil";

export default function CurrentWeather() {
  const forecast = useWeatherStore((state) => state.forecast);

  return (
    forecast && (
      <Card>
        <div className="flex items-baseline justify-between gap-2">
          <div>
            <h5 className="whitespace-nowrap">Current Weather</h5>
            <h6 className="text-xs text-slate-200 font-light">
              {dateUtil.epochToTime(forecast.location.localtime_epoch)}
            </h6>
          </div>
          <p className="break-all text-sm">{forecast.location.name}</p>
        </div>
        <div className="mt-4 flex gap-5">
          <Image
            src={urlUtil.appendWithHttps(forecast.current.condition.icon)}
            alt={forecast.current.condition.text}
            width={80}
            height={80}
          />
          <div>
            <div className="flex gap-1 mb-1">
              <h2 className="text-6xl font-bold">{forecast.current.temp_c}</h2>
              <h5 className="-mt-2">°C</h5>
            </div>
            <h6 className="text-sm">{forecast.current.condition.text}</h6>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <IconDetail icon={Waves} text={forecast.current.humidity} />
          <IconDetail icon={Droplet} text={`${forecast.current.precip_mm}mm`} />
          <IconDetail icon={Wind} text={`${forecast.current.wind_kph}km/h`} />
          <IconDetail icon={Sun} text={forecast.current.uv} />
        </div>
      </Card>
    )
  );
}
