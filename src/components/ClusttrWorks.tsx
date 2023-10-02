import React from "react";
import { InfoCard } from ".";
import { infoData } from "@/constants";

const ClusttrWorks = () => {
  return (
    <div className="w-full mx-auto py-12 bg-[#F6EEFB]">
      <h2 className="text-5xl mb-8 font-bold text-center">How Clusttr Works</h2>
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
