import { Link } from "react-router-dom";
import { AFEN_SVGS, CustomButton } from "../../../components";
import { APP_ROUTES } from "../../../router/constants";

const { Dolphin } = AFEN_SVGS;

const SingleNFTTemplate = () => {
  return (
    <div className="mt-20 text-xl text-afen-ash">
      <p>
        A “Single” collectible gives you the opportunity to have a one of a kind
        collectible.
      </p>
      <div className="mt-14">
        <div className="w-full md:w-[26rem] rounded-xl border border-[#8F8F8F] px-8 py-14  mx-auto flex flex-col items-center gap-14">
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
          <Link to={APP_ROUTES.SINGLE_NFT}>
            <CustomButton
              label="Create"
              secondary
              className="max-w-[30rem] w-full !mx-auto"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleNFTTemplate;
