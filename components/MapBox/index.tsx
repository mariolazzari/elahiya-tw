"use client";
import MapGl, { NavigationControl, Marker } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

const MapBox = () => {
  const latitude = 35.7319994;
  const longitude = 51.9010673;
  const apiKey = "EGswGwC8sNX2v1gMT662";
  const zoom = 14;

  return (
    <MapGl
      initialViewState={{
        longitude,
        latitude,
        zoom,
      }}
      style={{
        width: "90vw",
        height: "60vh",
      }}
      mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${apiKey}`}
    >
      <Marker latitude={latitude} longitude={longitude} color="purple" />
      <NavigationControl position="top-left" />
    </MapGl>
  );
};

export default MapBox;
