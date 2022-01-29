import React from "react";
import { DocumentHeader } from "../../../components/reusables";

const CreateNFT = ({ title = "Home" }: { title?: string }) => {
  return (
    <>
      <DocumentHeader title={title} />
      <div className="bg-afen-yellow">
        <h3>CreateNFT</h3>
      </div>
    </>
  );
};

export default CreateNFT;
