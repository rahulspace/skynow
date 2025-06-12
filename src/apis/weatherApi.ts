import apiService from "@/services/apiService";

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export interface SearchResultItem {
  id: number;
  lat: number;
  lon: number;
  name: string;
  region: string;
  country: string;
  url: string;
}

interface WeatherLocation {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

interface WeatherCondition {
  text: string;
  icon: string;
  code: number;
}

interface CurrentWeather {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: WeatherCondition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

export interface CurrentResult {
  location: WeatherLocation;
  current: CurrentWeather;
}

const weatherApi = {
  search(location: string) {
    return apiService.get<SearchResultItem[]>(
      `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${location}`
    );
  },

  current(location: string | number) {
    return apiService.get<CurrentResult>(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`
    );
  },
};

export default weatherApi;
