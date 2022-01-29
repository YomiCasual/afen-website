import { useState } from "react";
import { AFEN_SVGS, NFTLayout } from "../../../components";
import { DocumentHeader } from "../../../components/reusables";
import SingleNFT from "../components/SingleNFT";

const { ArrowLeft } = AFEN_SVGS;

const CreateSingleNFT = ({ title = "Home" }: { title?: string }) => {
  const [nftType, setNftType] = useState("");

  const handleChange = (e: any) => {
    setNftType(e.target.value);
  };

  return (
    <>
      <DocumentHeader title={title} />
      <h3>Create Single NFT</h3>
    </>
  );
};

export default CreateSingleNFT;
