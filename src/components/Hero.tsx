"use client";
import React from "react";
import { CustomButton } from ".";
import Image from "next/image";

const Hero = () => {
  const joinWaitlist = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log("join Waitlist");
  };
  return (
    <div className=" text-white h-screen flex items-center justify-center bg-gradient-to-r from-[#2AAF3F]  via-gray-100 to-[#892AD3]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-16 items-center max-w-[1440px]">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl lg:text-5xl">
            Empowering Individuals to <b>Co-Own, Invest, and Prosper</b>{" "}
            Together
          </h2>
          <p className="text-gray-600 mt-6">
            At Clusttr, we are transforming the way you think about real estate
            ownership.
          </p>
          <form className="w-3/4 flex gap-x-4 mt-8">
            <div className="border rounded-2xl w-[65%] h-full ">
              <input
                type="email"
                className="border border-gray-300 p-2 focus:ring focus:ring-blue-200 rounded-2xl text-gray-500 w-full outline-none"
                placeholder="Enter Email"
              />
            </div>

            <CustomButton
              title="Join Waitlist"
              btnType="submit"
              customStyles="bg-[#4F7FDB] text-base rounded-2xl text-white hover:bg-blue-600 w-[10rem]"
              handleClick={joinWaitlist}
            />
          </form>
        </div>
        <div className="">
          <Image
            src="/hero.png"
            alt="hero-image"
            width={690.517}
            height={445.861}
            // className="mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
    // <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">

    //   <div className="flex-1 pt-36 sm:px-16 px-6">
    //     <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px]">
    //       Empowering Individuals to <b>Co-Own, Invest, and Prosper</b> Together
    //     </h1>
    //     <p className="text-[27px] text-black-100 font-light mt-5">
    //       At Clusttr, we are transforming the way you think about real estate
    //       ownership.
    //     </p>
    //     <div>
    //       <input type="text" placeholder="Your Email" />
    //       <CustomButton
    //         title="Join Waitlist"
    //         btnType="submit"
    //         customStyles="bg-[#4F7FDB] text-base rounded-2xl text-white hover:bg-blue-600"
    //         handleClick={joinWaitlist}
    //       />
    //     </div>
    //   </div>

    //   <div className="flex justify-end items-end w-full xl:h-screen;">
    //     <div className="relative w-full xl:h-full h-[590px] z-0 ">
    //       <Image
    //         src="/hero.png"
    //         alt="hero-image"
    //         width={690.517}
    //         height={445.861}
    //       />
    //     </div>
    //     <div className="absolute bg-hero-image-elipse bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden" />
    //   </div>
    // </div>
  );
};

export default Hero;
