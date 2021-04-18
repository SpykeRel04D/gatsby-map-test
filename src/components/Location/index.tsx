import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import { Container } from "./styles";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
  position: "absolute",
};

const center = {
  lat: 41.21716924131274,
  lng: 1.7275491112933439,
};

const Location = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return (
    <Container ratio={16 / 9}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      ></GoogleMap>
    </Container>
  );
};

export default Location;
