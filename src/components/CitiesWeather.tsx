import Card from "./Card";
import CityWeather from "./CityWeather";

export default function CitiesWeather() {
  return (
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
      <div className="flex flex-col mt-4 gap-1">
        <CityWeather />
        <CityWeather />
        <CityWeather />
        <CityWeather />
        <CityWeather />
      </div>
    </Card>
  );
}
