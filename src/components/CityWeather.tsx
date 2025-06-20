import { CurrentResult } from "@/apis/weatherApi";
import urlUtil from "@/utils/urlUtil";
import Image from "next/image";

interface Props {
  city: CurrentResult;
}

export default function CityWeather(props: Props) {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex gap-3 items-center flex-shrink-0">
        <Image
          src={urlUtil.appendWithHttps(props.city.current.condition.icon)}
          alt={props.city.current.condition.text}
          width={26}
          height={26}
        />
        <p className="text-sm">{props.city.location.name}</p>
      </div>
      <p className="text-xs">{props.city.current.condition.text}</p>
    </div>
  );
}
