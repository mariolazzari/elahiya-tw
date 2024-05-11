"use client";

import { useLocale } from "next-intl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapGl, {
  Marker,
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
  ScaleControl,
} from "react-map-gl";

export function Map() {
  const locale = useLocale();

  const longitude = 51.4541871;
  const latitude = 35.7665763;
  const apiKey =
    "pk.eyJ1IjoibWFyaW9sYXp6YXJpIiwiYSI6ImNsNHJjcnIyNzBzcWQzZHMyOWlzYjN5ZGwifQ.qq6J4d0AS6FIziS6pQxoYQ";

  const style = {
    width: "99%",
    height: "500px",
  };

  return (
    <MapGl
      mapboxAccessToken={apiKey}
      style={style}
      initialViewState={{
        longitude,
        latitude,
        zoom: 11,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      attributionControl={false}
      locale={{ locale }}
    >
      <Marker longitude={longitude} latitude={latitude} color="purple" />
      <ScaleControl />
      <NavigationControl />
      <FullscreenControl />
      <GeolocateControl />
    </MapGl>
  );
}
