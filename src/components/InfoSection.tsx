import React from "react";
// import ellipse10 from "../../public/ellipse10.svg";
import Image from "next/image";

const InfoSection = () => {
  return (
    <div className="w-full flex justify-center items-center bg-white">
      <div className="flex flex-col items-center justify-center max-w-[1440px] py-6">
        <h2 className="text-5xl mb-3 font-bold">Why Clusttr?</h2>
        <div className="w-full flex flex-col items-center">
          <div className="flex w-full gap-4 items-center">
            <article className=" flex gap-4 px-16">
              {/* <div
                style={{ backgroundImage: `url("/ellipse10.svg")` }}
                className="bg-cover bg-center w-[297px] h-[250px]"
                > 
                </div>
              */}
              <div className="w-60">
                <Image
                  src="/Vault-amico.png"
                  alt="Unlock-image"
                  width={217}
                  height={211}
                  className="mx-auto"
                />
              </div>
              <div className="max-w-[27rem] flex flex-col justify-center">
                <h4 className="ml-28 text-lg text-end font-semibold">
                  Unlock Your Real Estate Potential
                </h4>
                <p className="border-l-2 border-[#4F7FDB] pl-4 pr-7 mt-5 text-left">
                  Invest in premium properties with a fraction of the upfront
                  cost.& spread your investments across multiple properties and
                  locations.
                </p>
              </div>
            </article>
          </div>

          <div className="flex justify-end w-full gap-4 items-center">
            <article className=" flex justify-end gap-4 px-1">
              <div className="max-w-[27rem] flex flex-col justify-center">
                <h4 className="mr-28 text-lg font-semibold">
                  Intelligent Co-Ownership Platform
                </h4>
                <p className="border-r-2 border-[#4F7FDB] pr-4 mt-5 text-right">
                  Connect with like-minded co-owners based on your preferences,
                  goals, and investment strategies.
                </p>
              </div>
              <div className="w-60">
                <Image
                  src="/coownership.png"
                  alt="coownership icon"
                  width={217}
                  height={211}
                  className="mx-auto"
                />
              </div>
            </article>
          </div>

          <div className="flex w-full gap-4 items-center">
            <article className=" flex gap-4 px-16">
              <div className="w-60">
                <Image
                  src="/comprehensive.png"
                  alt="comprehensive icon"
                  width={217}
                  height={211}
                  className="mx-auto"
                />
              </div>
              <div className="max-w-[27rem] flex flex-col justify-center">
                <h4 className="ml-28 text-lg text-end font-semibold">
                  Comprehensive Financial Services
                </h4>
                <p className="border-l-2 border-[#4F7FDB] pl-4 pr-7 mt-5 text-left">
                  Leave the hassles of property upkeep, maintenance, and
                  management to our experienced team & <br />
                  enjoy a seamless, secure, and transparent <br />
                  financial ecosystem for co-owners.
                </p>
              </div>
            </article>
          </div>

          <div className="flex justify-end w-full gap-4 items-center">
            <article className=" flex justify-end w-[1000px] gap-4 px-1">
              <div className="max-w-[27rem] flex flex-col justify-center">
                <h4 className="mr-28 text-lg font-semibold">
                  Community-First Approach
                </h4>
                <p className="border-r-2 border-[#4F7FDB] pr-4 mt-5 text-right">
                  Join a community of co-owners, investors, and experts who are
                  here to share knowledge and insights.
                </p>
              </div>
              <div className="w-60">
                <Image
                  src="/community.png"
                  alt="comunity icon"
                  width={217}
                  height={211}
                  className="mx-auto"
                />
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
