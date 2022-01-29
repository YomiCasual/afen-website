import { useState } from "react";
import { CreateSingleCollectionForm, FilePreview } from "../components";
import { DocumentHeader } from "../../../components/reusables";
import { Navbar } from "../../../components";

const CreateSingleNFT = ({
  title = "Create Single NFT",
}: {
  title?: string;
}) => {
  const [file, setFile] = useState("");

  return (
    <>
      <DocumentHeader title={title} />
      <Navbar />
      <article>
        <div className="max-width py-10">
          <div></div>
          <h3 className="text-4xl font-bold px-4">CREATE SINGLE COLLECTION</h3>
          <div className="flex flex-wrap gap-12">
            <CreateSingleCollectionForm setFile={setFile} />
            <FilePreview file={file} />
          </div>
        </div>
      </article>
    </>
  );
};

export default CreateSingleNFT;
