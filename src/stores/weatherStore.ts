import weatherApi, { CurrentResult, ForecastResult } from "@/apis/weatherApi";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface Store {
  location: string | number;
  forecast: ForecastResult | null;
  cities: CurrentResult[];
  replaceLocation(location: string | number): void;
  replaceCities(cities: CurrentResult[]): void;
}

const initialState = {
  location: "",
  forecast: null,
  cities: [],
};

const useWeatherStore = create<Store>()(
  persist(
    immer((set) => ({
      ...initialState,
      async replaceLocation(location) {
        set((state) => {
          state.location = location;
        });
        const forecast = await weatherApi.forecast(location);
        set((state) => {
          state.forecast = forecast;
        });
      },
      replaceCities(cities) {
        set((state) => {
          state.cities = cities;
        });
      },
    })),
    { name: "skyNow" }
  )
);

export const weatherStore = useWeatherStore.getState;
export default useWeatherStore;
