"use client";
import React from "react";
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  btnType,
  customStyles,
  handleClick,
  disabled,
}: CustomButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={btnType || "button"}
      className={` focus:ring-1 focus:ring-primary-200 font-medium px-4 py-1.5 h-10 focus:outline-none outline-none ${customStyles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
