import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../../router/constants";

const HomeHero = () => {
  return (
    <div className="relative">
      <div className="main-banner "></div>
      <div className="absolute max-w-[60rem]  transform left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 space-y-6">
        <h3 className="text-4xl text-white font-black text-center">
          <span className="block">Explore, buy and sell spectacular</span>
          <span className="block">
            NFTs in the <span className="text-afen-yellow">Marketplace</span>
          </span>
        </h3>
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <button className="px-14 py-4 rounded-lg bg-afen-blue text-white transform shadow-md hover:-translate-y-1 duration-500 transition-all hover:shadow-xl">
            Stake
          </button>
          <Link to={APP_ROUTES.CREATE_NFT}>
            <button className="px-14 py-4 rounded-lg border border-afen-blue text-white transform shadow-md hover:-translate-y-1 duration-500 transition-all hover:shadow-xl">
              Create
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
