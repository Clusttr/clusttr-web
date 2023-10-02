import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  customStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface InfocardsProps {
  title: string;
  iconsrc: string;
  text: string;
  alt: string;
}
