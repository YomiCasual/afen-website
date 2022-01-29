import clsx from "clsx";
import { ItemsType } from "../types";

const NFTCard = ({
  large = true,
  auction = false,
  item,
}: {
  large?: boolean;
  auction?: boolean;
  item: ItemsType;
}) => {
  const {
    mainImage,
    centerImage,
    nftName,
    nftCaption,
    leftTitle,
    leftCaption,
    rightTitle,
    rightCaption,
    type,
  } = item;
  return (
    <div className="h-[38rem]">
      <div
        className={clsx(
          `w-full md:w-[17rem] rounded-lg border overflow-hidden relative group
          cursor-pointer shadow-md hover:shadow-xl
          hover:-translate-y-4 duration-500 transition-all
          `,
          large && "w-full md:!w-[24rem]"
        )}
      >
        <div className="absolute top-0 left-0 bg-afen-light-blue px-4 py-1 rounded-br-lg text-white z-50">
          <p>{type}</p>
        </div>
        <div className="h-[23rem] w-full  relative">
          <img
            src={mainImage}
            className="object-cover h-full w-full overflow-hidden"
            alt="img"
          />
          <img
            src={centerImage}
            className={clsx(
              `object-cover h-16 w-16 rounded-full border-4 border-white absolute z-50 transform left-1/2 -translate-x-1/2 -bottom-8`,
              large && "!h-20 !w-20"
            )}
            alt="img"
          />
        </div>
        <div className="pt-12 space-y-4">
          <div className="px-4 space-y-4">
            <div>
              <h3 className="text-center font-bold text-sm">{nftName}</h3>
              <h3 className="text-center font-bold text-md text-[#7F7F7F]">
                {nftCaption}
              </h3>
            </div>
            <div className="flex flex-wrap justify-between">
              <div>
                <p>{leftTitle}</p>
                <p className="font-bold">{leftCaption}</p>
              </div>
              <div className="text-right">
                <p>{rightTitle}</p>
                <p className="font-bold">{rightCaption}</p>
              </div>
            </div>
          </div>

          <p
            className={clsx(
              `h-0 !overflow-hidden duration-500 transition-all
                flex items-center justify-center
              bg-afen-light-blue text-white  text-center font-bold`,
              auction && "group-hover:h-[2.5rem]"
            )}
          >
            Bid
          </p>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
