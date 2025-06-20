import weatherApi, { SearchResultItem } from "@/apis/weatherApi";
import { debounce, isEmpty } from "lodash";
import { Search } from "lucide-react";
import { ChangeEvent, useMemo, useState } from "react";
import LocationSearchOption from "./LocationSearchOption";
import useWeatherStore from "@/stores/weatherStore";

export default function LocationSearch() {
  const [location, setLocation] = useState("");
  const [locations, setLocations] = useState<SearchResultItem[]>([]);
  const replaceLocation = useWeatherStore((state) => state.replaceLocation);

  const debouncedSearch = useMemo(
    () =>
      debounce(async (value: string) => {
        const locations = await weatherApi.search(value);
        if (!locations) return;
        setLocations(locations);
      }, 500),
    []
  );

  const clearState = () => {
    setLocation("");
    setLocations([]);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (!value) {
      clearState();
      return;
    }
    setLocation(value);
    debouncedSearch(value);
  };

  const handleSelect = (location: SearchResultItem) => {
    clearState();
    replaceLocation(`${location.name},${location.region},${location.country}`);
  };

  return (
    <div className="relative">
      <div className="w-full flex items-center justify-center px-2 py-2 gap-2 rounded-lg bg-slate-950/5">
        <Search className="text-slate-200" size={18} />
        <input
          name="search"
          value={location}
          placeholder="Search for location"
          onChange={handleChange}
          className="w-full outline-none text-slate-50 placeholder:text-slate-200 text-base font-light"
        />
      </div>
      {!isEmpty(locations) && (
        <div className="absolute top-10 py-2 bg-slate-950/5 rounded-lg w-full backdrop-blur-sm">
          {locations.map((location) => {
            return (
              <LocationSearchOption
                key={location.id}
                location={location}
                onSelect={handleSelect}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
