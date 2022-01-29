import { useState } from "react";
import { CreateNFTHeader, SingleNFTTemplate } from "../components";
import { NFTLayout, DocumentHeader, Navbar } from "../../../components";

const CreateNFT = ({ title = "Create NFT" }: { title?: string }) => {
  const [nftType, setNftType] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNftType(e.target.value);
  };

  return (
    <>
      <DocumentHeader title={title} />
      <Navbar />
      <NFTLayout>
        <div className="h-full flex justify-center py-16">
          <div className="max-w-[50rem] ">
            <CreateNFTHeader handleChange={handleChange} />
            {nftType === "single" && <SingleNFTTemplate />}
          </div>
        </div>
      </NFTLayout>
    </>
  );
};

export default CreateNFT;
