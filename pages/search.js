import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import Link from "next/link";

const Search = () => {
  return (
    <Wrapper>
      <Link href="/">
        <ButtonContainer>
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </ButtonContainer>
      </Link>
      <InputContainer>
        <FromToIcons>
          <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
          <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
          <Square src="https://img.icons8.com/windows/50/000000/square-full.png" />
        </FromToIcons>
        <InputBoxes>
          <Input placeholder="Enter pickup location" />
          <Input placeholder="Where to?" />
        </InputBoxes>
        <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
      </InputContainer>
      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
        Saved Places
      </SavedPlaces>
      <ConfirmButtonContainer>ConFirm Location</ConfirmButtonContainer>
      {/* Button contanier */}
      {/* Input Containter */}
    </Wrapper>
  );
};

export default Search;
const Wrapper = tw.div`
bg-gray-200 h-screen
`;
const ButtonContainer = tw.div`
bg-white px-4
`;
const BackButton = tw.img`
h-12 cursor-pointer
`;
const FromToIcons = tw.div`
w-10 flex flex-col mr-3 mb-5 items-center
`;
const InputContainer = tw.div`
bg-white flex items-center px-4
`;

const Circle = tw.img`
h-8
`;
const Line = tw.img`
h-10
`;
const Square = tw.img`
h-8
`;
const InputBoxes = tw.div`
flex flex-col flex-1
`;
const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-4 outline-none border-none
`;
const PlusIcon = tw.img`
h-10 w-10 bg-gray-200 rounded-full ml-3
`;
const SavedPlaces = tw.div`
flex items-center bg-white px-4 py-2 my-2
`;
const StarIcon = tw.img`
bg-gray-500 w-10 h-10 p-2 rounded-full mr-4
`;
const ConfirmButtonContainer = tw.div`
bg-black text-white text-center mx-10 mt-2  py-3 px-4
transform hover:scale-105 transition text-xl  cursor-pointer
`;
