import { InfocardsProps } from "@/types";
import Image from "next/image";
import React from "react";

const InfoCard = ({ iconsrc, title, text, alt }: InfocardsProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 text-center">
      <div className="flex justify-center items-center">
        <Image src={iconsrc} height={100} width={100} alt={`${alt}`} />
      </div>
      <h3 className="text-xl font-semibold mt-4 text-primary-100">{title}</h3>
      <p className="mt-8 text-sm text-primary-100">{text}</p>
    </div>
  );
};

export default InfoCard;
