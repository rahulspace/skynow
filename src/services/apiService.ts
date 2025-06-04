import { alertStore } from "@/stores/alertStore";
import axios, { AxiosError } from "axios";
import { redirect } from "next/navigation";

type Response<Body> = Promise<Body | null>;

function client() {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
  });
  const handleError = (error: unknown) => {
    const title = "Request failed";
    const message =
      error instanceof AxiosError && error.response
        ? error.response.data.message
        : error instanceof Error
        ? error.message
        : "Something went wrong!";
    alertStore().replace(title, message, "danger");
    const isUnauthorized =
      error instanceof AxiosError &&
      error.response &&
      error.response.status === 401;
    if (isUnauthorized) {
      redirect("/");
    }
    return Promise.resolve(null);
  };
  instance.interceptors.request.use((config) => {
    return config;
  }, handleError);
  instance.interceptors.response.use((response) => {
    return response.data;
  }, handleError);
  return instance;
}

const apiService = {
  get<Body>(url: string): Response<Body> {
    return client().get(url);
  },

  post<Body>(url: string, data?: unknown): Response<Body> {
    return client().post(url, data);
  },

  delete<Body>(url: string): Response<Body> {
    return client().delete(url);
  },
};

export default apiService;
