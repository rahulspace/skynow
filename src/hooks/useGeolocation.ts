import { useState, useEffect } from "react";

type Geolocation = {
  lat: number;
  lng: number;
};

type GeolocationError = {
  code: number;
  message: string;
};

export function useGeolocation() {
  const [location, setLocation] = useState<Geolocation | null>(null);
  const [error, setError] = useState<GeolocationError | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError({
        code: 0,
        message: "Geolocation is not supported by your browser.",
      });
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setLoading(false);
      },
      (err) => {
        setError({ code: err.code, message: err.message });
        setLoading(false);
      }
    );
  }, []);

  return { location, error, loading };
}
