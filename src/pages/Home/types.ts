export type ItemsType = {
  mainImage: string;
  centerImage: string;
  nftName?: string;
  nftCaption: string;
  leftTitle?: string;
  leftCaption?: string;
  rightTitle?: string;
  rightCaption: string;
  type: string;
};

export type HomeItemType = {
  title: string;
  large: boolean;
  auction: boolean;
  items: ItemsType[];
};
