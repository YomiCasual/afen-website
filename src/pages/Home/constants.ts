import Nft1 from "../../static/images/nft-1.jpg";
import Nft2 from "../../static/images/nft-2.jpg";
import Nft3 from "../../static/images/nft-3.jpg";
import Nft4 from "../../static/images/nft-4.jpg";
import Nft5 from "../../static/images/nft-5.jpg";
import Nft6 from "../../static/images/nft-6.jpg";
import Nft7 from "../../static/images/nft-7.jpg";
import MiddleAvatar from "../../static/images/middle-avatar.jpg";
import { HomeItemType } from "./types";

export const HOME_ITEMS: HomeItemType[] = [
  {
    title: "Notable Drops",
    large: true,
    auction: false,
    items: [
      {
        mainImage: Nft1,
        centerImage: MiddleAvatar,
        nftName: "Dwayne Johnson",
        nftCaption: "Afen Bot_#004",
        leftTitle: "0.2BNB",
        leftCaption: "$56.98",
        rightCaption: "3215",
        type: "Collectibles",
      },
      {
        mainImage: Nft2,
        centerImage: MiddleAvatar,
        nftName: "Alisha Welson",
        nftCaption: "Harry Potter",
        leftTitle: "0.2BNB",
        leftCaption: "$1256.98",
        rightCaption: "215",
        type: "Arts",
      },
      {
        mainImage: Nft3,
        centerImage: MiddleAvatar,
        nftName: "Tayo Ogunko",
        nftCaption: "Sea Turtle",
        leftTitle: "0.3BNB",
        leftCaption: "$160.98",
        rightCaption: "3215",
        type: "Arts",
      },
    ],
  },
  {
    title: "Live Auction",
    large: false,
    auction: true,
    items: [
      {
        mainImage: Nft4,
        centerImage: MiddleAvatar,
        nftCaption: "0x653366C7f946f300f3...",
        leftTitle: "Current Bid",
        leftCaption: "1 BNB",
        rightTitle: "Time left",
        rightCaption: "00:06:12",
        type: "Arts",
      },
      {
        mainImage: Nft5,
        centerImage: MiddleAvatar,
        nftCaption: "0x653366C7f946f300f3...",
        leftTitle: "Current Bid",
        leftCaption: "1 BNB",
        rightTitle: "Time left",
        rightCaption: "00:06:12",
        type: "Arts",
      },
      {
        mainImage: Nft6,
        centerImage: MiddleAvatar,
        nftCaption: "0x653366C7f946f300f3...",
        leftTitle: "Current Bid",
        leftCaption: "1 BNB",
        rightTitle: "Time left",
        rightCaption: "00:06:12",
        type: "Collectibles",
      },
      {
        mainImage: Nft7,
        centerImage: MiddleAvatar,
        nftCaption: "0x653366C7f946f300f3...",
        leftTitle: "Current Bid",
        leftCaption: "1 BNB",
        rightTitle: "Time left",
        rightCaption: "00:06:12",
        type: "Collectibles",
      },
    ],
  },
];
