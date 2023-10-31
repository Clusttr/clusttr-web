import React from "react";
import { InfoCard } from ".";
import { infoData } from "@/constants";
import Image from "next/image";

const ClusttrWorks = () => {
  return (
    <div className="w-full mx-auto py-12 bg-white">
      <h2 className="text-3xl mb-10 font-bold flex items-center justify-center">
        How
        <span>
          <Image
            src={"/logo.svg"}
            width={100}
            height={50}
            className="mx-2"
            alt="Clusttr logo"
          />
        </span>
        Works
      </h2>
      <div className="max-w-[1440px] px-12 flex justify-center items-center">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {infoData.map((info, index) => (
            <InfoCard key={index} {...info} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClusttrWorks;
