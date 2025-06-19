import { ForecastDay } from "@/apis/weatherApi";
import dateUtil from "@/utils/dateUtil";
import urlUtil from "@/utils/urlUtil";
import { round } from "lodash";
import Image from "next/image";

interface Props {
  day: ForecastDay;
  timezone: string;
}

export default function ForecastItem(props: Props) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-3 items-center">
        <Image
          src={urlUtil.appendWithHttps(props.day.day.condition.icon)}
          alt={props.day.day.condition.text}
          width={26}
          height={26}
        />
        <p className="text-sm">{`${round(
          props.day.day.mintemp_c,
          0
        )}° / ${round(props.day.day.maxtemp_c, 0)}°`}</p>
      </div>
      <p className="text-xs">
        {dateUtil.epochToDate(props.day.date_epoch, props.timezone)}
      </p>
    </div>
  );
}
