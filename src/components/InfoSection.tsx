import React from "react";
// import ellipse10 from "../../public/ellipse10.svg";
import Image from "next/image";

const InfoSection = () => {
  return (
    <div className="w-full flex justify-center items-center bg-white">
      <div className="flex flex-col items-center justify-center max-w-[1440px] py-12">
        <h2 className="text-3xl mb-3 font-bold flex items-center justify-center">
          Why
          <span>
            <Image
              src={"/logo.svg"}
              width={100}
              height={50}
              className="ml-2"
              alt="Clusttr logo"
            />
          </span>
          ?
        </h2>
        <div className="w-full flex flex-col items-center">
          <div className="flex w-full gap-4 items-center mt-6">
            <article className="flex flex-col md:flex-row items-center gap-x-12 gap-y-4 justify-center px-16 w-full">
              <div className="max-w-[27rem] flex flex-col items-center md:justify-center text-primary-100">
                <h4 className="md:ml-28 text-lg text-center md:text-end font-semibold">
                  Unlock Your Real Estate Potential
                </h4>
                <p className="md:pl-4 md:pr-7 mt-5 text-center md:text-left">
                  Invest in premium properties with a fraction of the upfront
                  cost.& spread your investments across multiple properties and
                  locations.
                </p>
              </div>

              <div className="">
                <Image
                  src="/assets/image/why-clusttr-vault.png"
                  alt="Unlock-image"
                  width={320}
                  height={170}
                  className="mx-auto"
                />
              </div>
            </article>
          </div>
          <div className="flex w-full gap-4 items-center mt-6">
            <article className="flex flex-col-reverse md:flex-row items-center gap-x-12 gap-y-4 justify-center px-16 w-full">
              <div className="">
                <Image
                  src="/assets/image/why-clusttr-financing.png"
                  alt="Unlock-image"
                  width={320}
                  height={170}
                  className="mx-auto"
                />
              </div>

              <div className="max-w-[27rem] flex flex-col items-center md:justify-center text-primary-100">
                <h4 className="md:ml-28 text-lg text-center md:text-end font-semibold">
                  Comprehensive Financial Services
                </h4>
                <p className="md:pl-4 md:pr-7 mt-5 text-center md:text-left">
                  Leave the hassles of property upkeep, maintenance, and
                  management to our experienced team & enjoy a seamless, secure,
                  and transparent financial ecosystem for co-owners.
                </p>
              </div>
            </article>
          </div>
          <div className="flex w-full gap-4 items-center mt-6">
            <article className="flex flex-col md:flex-row items-center gap-x-12 gap-y-4 justify-center px-16 w-full">
              <div className="max-w-[27rem] flex flex-col justify-center text-primary-100">
                <h4 className="md:ml-28 text-lg text-center md:text-end font-semibold">
                  Intelligent Co-Ownership Platform
                </h4>
                <p className="md:pl-4 md:pr-7 mt-5 text-center md:text-left">
                  Connect with like-minded co-owners based on your preferences,
                  goals, and investment strategies.
                </p>
              </div>

              <div className="">
                <Image
                  src="/assets/image/why-clusttr-co-ownership.png"
                  alt="Unlock-image"
                  width={320}
                  height={170}
                  className="mx-auto"
                />
              </div>
            </article>
          </div>
          <div className="flex w-full gap-4 items-center mt-6">
            <article className="flex flex-col-reverse md:flex-row items-center gap-x-12 gap-y-4 justify-center px-16 w-full">
              <div className="">
                <Image
                  src="/assets/image/why-clusttr-community.png"
                  alt="Unlock-image"
                  width={320}
                  height={170}
                  className="mx-auto"
                />
              </div>

              <div className="max-w-[27rem] flex flex-col items-center md:justify-center text-primary-100">
                <h4 className="md:ml-28 text-lg text-center md:text-end font-semibold">
                  Community-First Approach
                </h4>
                <p className="md:pl-4 md:pr-7 mt-5 text-center md:text-left">
                  Join a community of co-owners, investors, and experts who are
                  here to share knowledge and insights.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
