"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CustomButton } from ".";
import axios from "axios";
import { baseUrl } from "@/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FirstToKnow = () => {
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
    <div className="w-full flex items-center">
      <div className="flex flex-col w-full gap-4 justify-center max-w-[1440px] py-10">
        <div className=" flex flex-col-reverse sm:flex-row sm:justify-center gap-7 px-16 pt-6">
          <div>
            <Image
              src="/assets/image/first-to-know.png"
              alt="First to know icon"
              width={224}
              height={224}
              className="mx-auto"
            />
          </div>
          <div className="max-w-[27rem] flex flex-col justify-center">
            <h5 className="text-3xl text-center font-semibold">
              Be the first to know when we launch
            </h5>
          </div>
        </div>

        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <div className="min-w-[10rem] px-4 sm:px-0 sm:w-60 h-full">
            <input
              type="email"
              required
              className="border py-1.5 px-2.5 border-primary-100 rounded-xl text-primary-100 w-full  outline-none"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <CustomButton
            title="Join Waitlist"
            btnType="submit"
            customStyles="bg-primary-100 text-sm rounded-xl text-white hover:bg-primary-200 min-w-[7rem]"
            handleClick={joinWaitlist}
            disabled={isSubmitting}
          />
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};

export default FirstToKnow;
