"use client";
import React from "react";
import { CustomButton } from ".";
import Image from "next/image";
import Link from "next/link";
import { Web3Auth } from "@web3auth/modal";
import { type } from "os";
import { NavbarProps } from "@/types";
import { reset } from "@/store/slice/userSlice";
import { useAppSelector, useAppDispatch } from "@/store/hooks";

const Navbar = ({ login }: NavbarProps) => {
  const { accountKey, web3auth } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    if (web3auth) {
      web3auth.logout();
      dispatch(reset());
    }
  };

  const whitePaper = () => {
    console.log("White Paper");
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
            handleClick={whitePaper}
          />
          {/* <Link href={`/login`}> */}
          {!accountKey ? (
            <CustomButton
              title="Try DEMO"
              // onClick={() => handleLib()}
              customStyles={`bg-[#4F7FDB] text-base rounded-2xl text-white hover:bg-blue-600 ml-3`}
              handleClick={login}
            />
          ) : (
            <CustomButton
              title="Logout"
              // onClick={() => handleLib()}
              customStyles={`bg-[#4F7FDB] text-base rounded-2xl text-white hover:bg-blue-600 ml-3`}
              handleClick={() => handleLogout()}
            />
          )}
          {/* </Link> */}
          {/* <button onClick={() => login()}>clickme</button> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
