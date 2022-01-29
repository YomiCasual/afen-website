import SampleNFT from "../../../static/images/sample-nft.png";

const FilePreview = ({ file }: { file: string }) => {
  return (
    <div className="order-1 lg:order-2 w-full lg:w-[35rem] px-4 flex items-center justify-center">
      <div className="flex flex-col w-[25rem] gap-3">
        <label>{file ? "PREVIEW" : "SAMPLE PREVIEW"}</label>
        <div className="h-[34rem] mx-auto w-full border-2 ">
          <img
            src={file ? file : SampleNFT}
            alt="img"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default FilePreview;
