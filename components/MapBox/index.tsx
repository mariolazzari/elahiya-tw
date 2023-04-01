"use client";
import MapGl, { NavigationControl, Marker } from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const MapBox = () => {
  const latitude = 35.7315547;
  const longitude = 51.9012636;
  const apiKey = "EGswGwC8sNX2v1gMT662";
  const zoom = 14;

  const init = { longitude, latitude, zoom };

  return (
    <div>
      <MapGl
        mapLib={maplibregl}
        initialViewState={init}
        style={{
          width: "90vw",
          height: "60vh",
        }}
        mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${apiKey}`}
      >
        <NavigationControl position="top-left" />
        <Marker latitude={latitude} longitude={longitude} color="purple" />
      </MapGl>
    </div>
  );
};

export default MapBox;
