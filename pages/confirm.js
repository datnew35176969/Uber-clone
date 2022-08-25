import { accessToken } from "mapbox-gl";
import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";
import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import { useRouter } from "next/router";
import RideSelector from "./components/RideSelector";

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;
  console.log("pickup:", pickup);
  console.log("dropoff:", dropoff);
  //get, set function
  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();

  const getPickupCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token: `pk.eyJ1IjoiZGF0bmV3MzUxNzY5NjkiLCJhIjoiY2w2bWdwbzZ3MGxtYTNkbnR0ZHM5eWI2aCJ9.iR7dEh-z2szHHsq2qSpBPw`,
          limit: 1,
        })
    )
      .then((Response) => Response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };
  const getDropoffCoordinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token: `pk.eyJ1IjoiZGF0bmV3MzUxNzY5NjkiLCJhIjoiY2w2bWdwbzZ3MGxtYTNkbnR0ZHM5eWI2aCJ9.iR7dEh-z2szHHsq2qSpBPw`,
          limit: 1,
        })
    )
      .then((Response) => Response.json())
      .then((data) => {
        console.log("dropoff");
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, [pickup, dropoff]);
  return (
    <Wrapper>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />

      <RideContainer>
        <RideSelector />
        <ConfirmButtonContainer>ConFirm UberX</ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const ConfirmButtonContainer = tw.div`
bg-black text-white
`;
const Wrapper = tw.div`
flex h-screen flex-col
`;
const RideContainer = tw.div`
flex-1 flex flex-col
`;
