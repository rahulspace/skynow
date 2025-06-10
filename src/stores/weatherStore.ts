import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface Store {
  location: string | number;
  replaceLocation(location: string | number): void;
}

const initialState = {
  location: "",
} as const;

const useWeatherStore = create<Store>()(
  immer((set) => ({
    ...initialState,
    replaceLocation(location) {
      set((state) => {
        state.location = location;
      });
    },
  }))
);

export const weatherStore = useWeatherStore.getState;
export default useWeatherStore;
