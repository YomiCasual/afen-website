import React from "react";
import { AFEN_SVGS, CustomButton } from "../../../components";

const { ArrowLeft, Dolphin } = AFEN_SVGS;

const SingleNFT = () => {
  return (
    <>
      <div className="w-[26rem] rounded-xl border border-[#8F8F8F] px-8 py-14  mx-auto flex flex-col items-center gap-14">
        <Dolphin />
        <div className="w-full space-y-12">
          <div className="h-4 w-full bg-[#C4C4C4] rounded-lg "></div>
          <div className="h-4 w-full bg-[#C4C4C4] rounded-lg "></div>
          <div className="h-4 w-full bg-[#C4C4C4] rounded-lg "></div>
        </div>
        <div className="w-full mt-20 flex gap-4 items-center">
          <div className="w-12 h-12 rounded-full bg-[#C4C4C4] flex-none"></div>
          <div className="h-4 w-full bg-[#C4C4C4] rounded-lg "></div>
        </div>
      </div>
      <div className="mt-10  flex justify-center">
        <CustomButton
          label="Create"
          secondary
          className="max-w-[30rem] w-full !mx-auto"
        />
      </div>
    </>
  );
};

export default SingleNFT;
