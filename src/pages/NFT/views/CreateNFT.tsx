import { useState } from "react";
import { AFEN_SVGS, NFTLayout } from "../../../components";
import { DocumentHeader } from "../../../components/reusables";
import SingleNFT from "../components/SingleNFT";

const { ArrowLeft } = AFEN_SVGS;

const CreateNFT = ({ title = "Home" }: { title?: string }) => {
  const [nftType, setNftType] = useState("");

  const handleChange = (e: any) => {
    setNftType(e.target.value);
  };

  return (
    <>
      <DocumentHeader title={title} />
      <NFTLayout>
        <div className="h-full flex justify-center py-16">
          <div className="max-w-[50rem] ">
            <div className="flex items-center gap-2">
              <ArrowLeft />
              <h3 className="text-2xl">Go back</h3>
            </div>
            <h3 className="text-4xl font-bold text-afen-black mt-6">
              Create Collectible
            </h3>
            <p className="text-2xl text-afen-ash mt-2">
              Select "Single" to create one unique collectible or "Multiple" to
              create more than one of the same item
            </p>
            <select
              onChange={handleChange}
              name=""
              id=""
              className="mt-14 border-2 w-full px-4 py-4 rounded-lg"
            >
              <option value="">Select</option>
              <option value="single">Single</option>
              <option value="mutliple">Multiple</option>
            </select>
            {/* Single NFT */}
            {nftType === "single" && (
              <div className="mt-20 text-xl text-afen-ash">
                <p>
                  A “Single” collectible gives you the opportunity to have a one
                  of a kind collectible.
                </p>
                <div className="mt-14">
                  <SingleNFT />
                </div>
              </div>
            )}
          </div>
        </div>
      </NFTLayout>
    </>
  );
};

export default CreateNFT;
