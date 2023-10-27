import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  customStyles?: string;
  // onClick?: () => void;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  disabled?: boolean;
}

export interface InfocardsProps {
  title: string;
  iconsrc: string;
  text: string;
  alt: string;
}
export interface NavbarProps {
  login: () => void;
}

// NFT mint api response

export type Attribute = {
  value: string;
  traitType: string;
};

export type File = {
  uri: string;
  cdn_uri?: string;
  mime: string;
};

export type Nft = {
  id: string;
  uri: string;
  attribute: Attribute[];
  description: string;
  name: string;
  symbol: string;
  image: string;
  files: File[];
  supply: number;
  maxSupply: number;
};

export type NftResponse = Nft[];
