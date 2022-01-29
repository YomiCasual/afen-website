import { lazy } from "react";
import { APP_ROUTES } from "./constants";

const Home = lazy(() => import("../pages/Home/views/Home"));
const CreateNFT = lazy(() => import("../pages/NFT/views/CreateNFT"));
const CreateSingleNFT = lazy(
  () => import("../pages/NFT/views/CreateSingleNFT")
);

const { CREATE_NFT, HOME, SINGLE_NFT } = APP_ROUTES;

export const APP_ROUTES_VIEW = [
  {
    key: "home",
    path: HOME,
    component: Home,
    title: "Home",
  },
  {
    key: "create-nft",
    path: CREATE_NFT,
    component: CreateNFT,
    title: "Create NFT",
  },
  {
    key: "create-nft",
    path: SINGLE_NFT,
    component: CreateSingleNFT,
    title: "Create Single NFT",
  },
];
