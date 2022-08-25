import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";

import Link from "next/link";

export default function Home() {
  // what are components? reusable ui element

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/* {header} */}
        <Header>
          <UberLogo src="https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/UBER_fp01.png" />
          <Profile>
            <Name>Tan Nguyen</Name>
            <UserImage src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/man-raising-hand_1f64b-200d-2642-fe0f.png" />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserver
          </ActionButton>
        </ActionButtons>
        <InputButton>Where to?</InputButton>
        {/* ActionButtons */}
        {/* InputButton */}
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex flex-col  h-screen
`;

const ActionItems = tw.div`
flex-1 p-4
`;
const Header = tw.div`
flex justify-between items-center
`;

const UberLogo = tw.img`
h-28
`;
const Profile = tw.div`
flex items-center
`;

const Name = tw.div`
mr-4 w-20 text-sm
`;
const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px
`;
const ActionButtons = tw.div`
flex 
`;
const ActionButton = tw.div`
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg 
transform hover:scale-105 transition text-xl
`;
const ActionButtonImage = tw.img`
h-3/5`;

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-6
`;
