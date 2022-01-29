import React from "react";
import { AFEN_SVGS, CustomInput, CustomUpload } from "../../../components";

const { PercentageIcon } = AFEN_SVGS;

const CreateSingleCollectionForm = ({
  setFile,
}: {
  setFile: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="flex-auto order-2 lg:order-1 px-4">
      <div className="space-y-8 mt-16">
        <CustomUpload
          label="View on Marketplace"
          handleChange={(file) => setFile(file)}
        />
        <CustomInput label="View on Marketplace" iconType="dropdown" />
        <CustomInput
          label="Price"
          iconType="dropdown"
          placeholder="Enter price for one piece"
        />
        <CustomInput
          label="Price"
          placeholder="Suggested: 0%, 10%, 20%. Maximum is 20%"
          icon={PercentageIcon}
        />
        <CustomInput label="Title" placeholder="e.g “The Masterpiece”" />
        <CustomInput
          label="Description"
          placeholder="e.g “It is more than what the eye meet”"
        />

        <div className="flex justify-center pt-12">
          <button
            className="bg-[#494343]
                w-full md:w-[30rem] py-6 text-white font-bold text-lg !mx-auto
                "
          >
            Create NFT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateSingleCollectionForm;
