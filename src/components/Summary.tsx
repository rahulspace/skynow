import Card from "./Card";
import useWeatherStore from "@/stores/weatherStore";
import Chart from "./Chart";
import dateUtil from "@/utils/dateUtil";

export default function Summary() {
  const forecast = useWeatherStore((state) => state.forecast);
  const currentDay = forecast?.forecast.forecastday[0];
  if (!currentDay) return;

  const odds = currentDay.hour.filter((_, index) => index % 2 === 1);
  const data = odds.map((hour) => hour.temp_c);
  const times = odds.map((hour) =>
    dateUtil.epochToHour(hour.time_epoch, forecast.location.tz_id)
  );

  return (
    forecast && (
      <Card>
        <div className="flex justify-between items-center">
          <h5>Summary</h5>
        </div>
        <div className="flex flex-col gap-3">
          <Chart data={data} categories={times} />
        </div>
      </Card>
    )
  );
}
