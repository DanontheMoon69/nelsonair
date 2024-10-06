import React, { useState } from "react";

import { AiOutlineLogin, AiOutlineClockCircle } from "react-icons/ai";

import hero from "./Images/nelsonAirTechnician.jpg";

import Image from "next/image";
import Link from "next/link";

const HeroBanner = ({ props }) => {
  return (
    <div className="flex justify-center mb-12">
      <div className=" relative pt-24 ">
        <div className="relative ">
          <Image
            src={hero}
            alt="Yoga Barn"
            className=" object-cover h-full max-h-96   "
          />
        </div>
        <div className="absolute top-1/2 left-10 lg:left-48  transform  -translate-y-1/2 text-teal-500   ">
          <h1 className="font-thin tracking-widest text-2xl pt-12 sm:text-3xl">
            NEW STUDENT SPECIAL
          </h1>
          <h2 className=" text-3xl font-bold sm:text-4xl ">
            2 Weeks <br />
            Unlimited <br />
            for $30
          </h2>
          <Link href="/signUpPage">
            <button className="bg-teal-500 px-4 py-2 mt-4 rounded-full text-white">
              JOIN NOW
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
