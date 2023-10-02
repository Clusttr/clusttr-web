import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";
import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="flex flex-col text-white bg-[#82A9D9]">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10 max-w-[1440px]">
        <div className="flex flex-col justify-start items-start gap-6 mt-9">
          <Image
            src="/logowhite.svg"
            alt="Clusttr Logo"
            height={18}
            width={118}
            className="object-contain"
          />

          <p>
            Clusttr 2023 <br /> All rights reserved &copy;
          </p>
        </div>
        <div className="flex-1 w-full flex md:justify-center flex-wrap max-md:mt-7 gap-10">
          {/* <div className="flex-1 w-full flex md:justify-center flex-wrap max-md:mt-7 bg-green-400"> */}
          <div className="flex flex-col items-center md:items-start text-base w-[230px] mt-7">
            <h4 className="font-semibold text-2xl mb-5">Contact Us</h4>
            <p>
              Have more questions? Reach out to our dedicated support team at
              support@clusttr.com
            </p>
            <div className="flex gap-x-4 my-3">
              <Link href="/" className="text-2xl">
                <BsInstagram />
              </Link>
              <Link href="/" className="text-2xl">
                <BsTwitter />
              </Link>
              <Link href="/" className="text-2xl">
                <BsLinkedin />
              </Link>
            </div>
          </div>
          {footerLinks.map((link) => (
            <div
              key={link.title}
              className="flex flex-col items-center md:items-start text-base min-w-[170px] mt-7"
            >
              <h4 className="font-semibold text-2xl mb-5">{link.title}</h4>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="font-light text-sm underline mb-2"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center max-w-[1440px]">
        <article className="max-w-[768px] text-center">
          <b>Disclaimer: </b>
          <em>Clusttr</em> is a platform that facilitates real estate
          co-ownership and financial services. All investments involve risks,
          and past performance does not guarantee future results. Please consult
          with a financial advisor before making any investment decisions.
        </article>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-7 border-t border-gray-100 sm:px-16 px-6 py-7">
        <p>@2023 Clusttr. All rights reserved &copy;</p>
        <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
