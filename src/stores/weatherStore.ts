import weatherApi, { CurrentResult } from "@/apis/weatherApi";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface Store {
  location: string | number;
  current: CurrentResult | null;
  cities: CurrentResult[];
  replaceLocation(location: string | number): void;
  replaceCities(cities: CurrentResult[]): void;
}

const initialState = {
  location: "",
  current: null,
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
        const current = await weatherApi.current(location);
        set((state) => {
          state.current = current;
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
