import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type AlertType = "info" | "success" | "danger";

interface Store {
  title: string;
  message: string;
  type: AlertType;
  replace(title: string, message: string, type: AlertType): void;
  clear(): void;
}

const initialState = {
  title: "",
  message: "",
  type: "success",
} as const;

const useAlertStore = create<Store>()(
  immer((set) => ({
    ...initialState,
    replace(title, message, type) {
      set((state) => {
        state.title = title;
        state.message = message;
        state.type = type;
      });
    },
    clear() {
      set((state) => {
        state.title = "";
        state.message = "";
      });
    },
  }))
);

export const alertStore = useAlertStore.getState;
export default useAlertStore;
