import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  customStyles?: string;
  // onClick?: () => void;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
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
