import { useEffect } from "react";
import Card from "./Card";
import CityWeather from "./CityWeather";
import weatherApi from "@/apis/weatherApi";
import useWeatherStore from "@/stores/weatherStore";
import { compact, isEmpty } from "lodash";
import { useShallow } from "zustand/shallow";

export default function CitiesWeather() {
  const [cities, replaceCities] = useWeatherStore(
    useShallow((state) => [state.cities, state.replaceCities])
  );
  useEffect(() => {
    const fetchCities = async () => {
      const cities = await Promise.all([
        weatherApi.current("London"),
        weatherApi.current("New York"),
        weatherApi.current("Paris"),
        weatherApi.current("Tokyo"),
        weatherApi.current("Singapore"),
      ]);
      replaceCities(compact(cities));
    };
    fetchCities();
  }, [replaceCities]);

  return (
    !isEmpty(cities) && (
      <Card>
        <div className="flex justify-between items-center">
          <h5>Popular Cities</h5>
          <a
            href="https://www.accuweather.com/en/world-weather"
            target="_blank"
            className="text-xs transition-colors duration-300 hover:text-white"
          >
            View more
          </a>
        </div>
        <div className="flex flex-col mt-4 gap-2">
          {cities.map((city) => (
            <CityWeather city={city} key={city.location.name} />
          ))}
        </div>
      </Card>
    )
  );
}
