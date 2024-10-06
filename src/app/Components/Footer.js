import React, { useState, useEffect } from "react";
import nelsonLogo from "./Images/Nelson_Logo.png";
import {
  AiOutlineShopping,
  AiOutlineCalendar,
  AiOutlineEnvironment,
  AiOutlineLogin,
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" bg-sky-700 text-white h-auto pt-8 pb-10">
      <div className="flex justify-center">
        <Image src={nelsonLogo} width={400} />
      </div>
      <div className=" text-center font-bold">
        <span className="text-xl">NELSON AIR</span> <br />
        <span className=" text-lg font-thin tracking-wide">
          5062 Casa Oro Dr.
          <br /> Yorba Linda, CA 92886
        </span>
        <br />
        <span className="text-lg">Phone: 949-275-1615</span>
        <br />
        <div className="flex justify-center text-3xl">
          <AiFillFacebook />
          <AiFillInstagram />
        </div>
      </div>

      {/* SERVICE AREAS START */}
      {/* <div className="">
        <div className="flex-col justify-center">
          <div className=" text-center">SERVICE AREAS</div>
          <div className="flex text-xs tracking-wider  px-4 pt-2 pb-4 justify-center">
            <div className="flex-col mx-2">
              <div>Anaheim Hills</div>
              <div>Aliso Viejo</div>
              <div>Buena Park</div>
              <div>Costa Mesa</div>
              <div>Coto De Caza</div>
              <div>Crystal Cove</div>
              <div>Dana Point</div>
              <div>Dove Canyon</div>
              <div>Emerald Bay</div>
              <div>Foothill Ranch</div>
              <div>Fountain Valley</div>
              <div>Fullerton</div>
            </div>

            <div className="flex-col mx-2">
              <div>Garden Grove</div> <div>Huntington Beach</div>
              <div>Irvine</div>
              <div>Ladera Ranch</div>
              <div>Laguna Beach</div>
              <div>Laguna Hills</div>
              <div>Laguna Niguel</div> <div>Laguna Woods</div>
              <div>Lake Forest</div> <div>Mission Viejo</div>
              <div>Newport Beach </div>
              <div>Orange</div>
            </div>

            <div className="flex-col mx-2">
              <div>Placentia</div> <div>Portola Hills</div>{" "}
              <div>Mission Viejo</div>
              <div>Rancho Santa Margarita</div> <div>San Clemente</div>
              <div>San Juan Capistrano</div>
              <div>San Juoquin Hills</div>
              <div>Santa Ana</div> <div>Tustin</div> <div>Villa Park</div>{" "}
              <div>Westminister</div> <div>Yorba Linda</div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
