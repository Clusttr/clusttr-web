"use client";
import React from "react";
import { CustomButton } from ".";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const tryDemo = () => {
    console.log("try Demo");
  };
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href={`/`} className="flex  justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Clusttr Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <div className="flex">
          <CustomButton
            title="white paper"
            customStyles={`bg-white text-base rounded-2xl text-[#4F7FDB] hover:bg-blue-600 hover:text-white`}
            handleClick={tryDemo}
          />
          <CustomButton
            title="Try DEMO"
            customStyles={`bg-[#4F7FDB] text-base rounded-2xl text-white hover:bg-blue-600 ml-3`}
            handleClick={tryDemo}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
