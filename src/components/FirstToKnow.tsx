"use client";
import Image from "next/image";
import React from "react";
import { CustomButton } from ".";

const FirstToKnow = () => {
  const joinWaitlist = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log("join Waitlist");
  };
  return (
    <div className="w-full h-[23rem] flex items-center">
      <div className="flex w-full gap-4 justify-center max-w-[1440px]">
        <article className=" flex gap-7 px-16 pt-6">
          <div className="w-60">
            <Image
              src="/be-the-first.png"
              alt="First to know icon"
              width={217}
              height={211}
              className="mx-auto"
            />
          </div>
          <div className="max-w-[27rem] flex flex-col justify-between">
            <h5 className="text-4xl text-center font-semibold">
              Be the first to know when we launch
            </h5>
            <form className="w-full flex gap-x-4">
              <div className="border rounded-2xl w-[62%] h-full ">
                <input
                  type="email"
                  className="border border-gray-300 p-2 focus:ring focus:ring-blue-200 rounded-2xl text-gray-500 w-full outline-none"
                  placeholder="Enter Email"
                />
              </div>

              <CustomButton
                title="Join Waitlist"
                btnType="submit"
                customStyles="bg-[#4F7FDB] text-base rounded-2xl text-white hover:bg-blue-600 w-[10rem] outline-none"
                handleClick={joinWaitlist}
              />
            </form>
          </div>
        </article>
      </div>
    </div>
  );
};

export default FirstToKnow;
