"use client";
import React, { useState } from "react";
import { CustomButton } from ".";
import Image from "next/image";
import { baseUrl } from "@/constants";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const joinWaitlist = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (isSubmitting) {
      return; // Prevent multiple submissions
    }

    try {
      const response = await axios.post(`${baseUrl}/waitlist/register`, {
        email: email,
      });

      if (response.status === 200 || response.status === 201) {
        // Handle success
        // console.log("Email submitted successfully");
        toast.success("Email submitted successfully", {
          position: "top-right",
        });
        setEmail("");
      } else {
        toast.error("Submission failed", { position: "top-right" });
        console.log("Submission failed");
        // Handle the failure
      }
    } catch (error) {
      toast.error("Error while submitting email", { position: "top-right" });
      // console.error("Error while submitting email:", error);
      // Handle the error or display an error message
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="pt-14 lg:pt-4 xl:pt-0 text-white flex items-center justify-center bg-secondary ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-20 sm:px-16 px-6 lg:px-0 2xl:px-16 items-center xl:justify-between 2xl:max-w-[1440px]">
        <div className="text-center md:text-left lg:pl-16 xl:pl-24">
          <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl lg:text-5xl">
            Empowering Individuals to <b>Co-Own, Invest, and Prosper</b>{" "}
            Together
          </h2>
          <p className="text-gray-600 mt-6">
            At Clusttr, we are transforming the way you think about real estate
            ownership.
          </p>
          <form className="flex flex-col-reverse sm:flex-row justify-center md:justify-start items-center gap-4 mt-8">
            <CustomButton
              title="Join Waitlist"
              btnType="submit"
              customStyles="bg-primary-100 text-sm rounded-xl text-white hover:bg-primary-200 min-w-[7rem]"
              handleClick={joinWaitlist}
              disabled={isSubmitting}
            />
            <div className="min-w-[10rem] px-4 sm:px-0 sm:w-60 h-full">
              <input
                type="email"
                required
                className="border py-1.5 px-2.5 border-primary-100 rounded-xl text-primary-100 w-full outline-none"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className="flex justify-center xl:justify-end items-center">
          <Image
            src="/assets/image/hero-image.png"
            alt="hero-image"
            className=""
            width={605}
            height={605}
          />
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};

export default Hero;
