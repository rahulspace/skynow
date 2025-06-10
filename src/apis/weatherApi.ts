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

const weatherApi = {
  search(location: string) {
    return apiService.get<SearchResultItem[]>(
      `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${location}`
    );
  },
};

export default weatherApi;
