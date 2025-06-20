import Card from "./Card";
import useWeatherStore from "@/stores/weatherStore";
import ForecastItem from "./ForecastItem";

export default function Forecast() {
  const forecast = useWeatherStore((state) => state.forecast);

  return (
    forecast && (
      <Card className="h-full">
        <div className="flex justify-between items-center">
          <h5>Forecast</h5>
        </div>
        <div className="flex flex-col mt-4 gap-3">
          {forecast.forecast.forecastday.map((forecastday) => (
            <ForecastItem
              day={forecastday}
              timezone={forecast.location.tz_id}
              key={forecastday.date}
            />
          ))}
        </div>
      </Card>
    )
  );
}
