import React, { useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  MarkerClusterer,
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

const markers = [
  {
    lat: 41.21716924131274,
    lng: 1.7275491112933439,
  },
  {
    lat: 41.2916924999912,
    lng: 1.735491112933439,
  },
  {
    lat: 41.244169293551274,
    lng: 1.79524911450404,
  },
  {
    lat: 41.314569293551274,
    lng: 1.80525211450404,
  },
];

const Location = () => {
  const [currentMarker, setCurrentMarker] = useState(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  function createKey(location) {
    return location.lat + location.lng;
  }

  /* return (
    <Container ratio={16 / 9}>
      {loadError ? (
        "Error loading maps"
      ) : !isLoaded ? (
        "Loading maps"
      ) : (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={10}
          center={center}
          onLoad={map => {
            const bounds = new window.google.maps.LatLngBounds();
            markers.map(marker => {
              bounds.extend(marker);
            });
            map.fitBounds(bounds);
          }}
        >
          {markers.map((marker, i) => (
            <Marker
              key={"marker_" + i}
              position={{ lat: marker.lat, lng: marker.lng }}
              onClick={() => setCurrentMarker(marker)}
            />
          ))}
          {currentMarker && (
            <InfoWindow
              position={{ lat: currentMarker.lat, lng: currentMarker.lng }}
              onCloseClick={() => setCurrentMarker(null)}
            >
              <div>Marker information!</div>
            </InfoWindow>
          )}
        </GoogleMap>
      )}
    </Container>
  ); */

  return (
    <Container ratio={16 / 9}>
      {loadError ? (
        "Error loading maps"
      ) : !isLoaded ? (
        "Loading maps"
      ) : (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={6}
          center={center}
        >
          <MarkerClusterer>
            {clusterer =>
              markers.map(location => (
                <Marker
                  key={createKey(location)}
                  position={location}
                  clusterer={clusterer}
                />
              ))
            }
          </MarkerClusterer>
          {currentMarker && (
            <InfoWindow
              position={{ lat: currentMarker.lat, lng: currentMarker.lng }}
              onCloseClick={() => setCurrentMarker(null)}
            >
              <div>Marker information!</div>
            </InfoWindow>
          )}
        </GoogleMap>
      )}
    </Container>
  );
};

{
  /* <Marker
  key={"marker_" + i}
  position={{ lat: marker.lat, lng: marker.lng }}
  icon={{
    url: "/myicon.svg",
    scaledSize: new window.google.maps.Size(30, 30),
    origin: new window.google.maps.Point(0, 0),
  }}
/>; */
}

export default Location;
