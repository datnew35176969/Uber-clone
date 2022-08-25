import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

import { WrappedBuildError } from "next/dist/server/base-server";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGF0bmV3MzUxNzY5NjkiLCJhIjoiY2w2bWdwbzZ3MGxtYTNkbnR0ZHM5eWI2aCJ9.iR7dEh-z2szHHsq2qSpBPw";

const Map = (props) => {
  console.log(props);
  useEffect(() => {
    // if (map.current) return; // initialize map only once
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });

    if (props.pickupCoordinates) {
      addToMap(map, props.pickupCoordinates);
    }
    if (props.dropoffCoordinates) {
      addToMap(map, props.dropoffCoordinates);
    }

    if (props.pickupCoordinates && props.dropoffCoordinates) {
      map.fitBounds([props.dropoffCoordinates, props.pickupCoordinates], {
        padding: 80,
      });
    }
  }, [props.pickupCoordinates, props.dropoffCoordinates]);
  const addToMap = (map, coordinate) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinate).addTo(map);
  };

  return <Wrapper id="map"></Wrapper>;
};

export default Map;
const Wrapper = tw.div`
flex-1
`;
