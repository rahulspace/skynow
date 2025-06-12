import weatherApi, { CurrentResult } from "@/apis/weatherApi";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface Store {
  location: string | number;
  current: CurrentResult | null;
  replaceLocation(location: string | number): void;
}

const initialState = {
  location: "",
  current: null,
} as const;

const useWeatherStore = create<Store>()(
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
  }))
);

export const weatherStore = useWeatherStore.getState;
export default useWeatherStore;
