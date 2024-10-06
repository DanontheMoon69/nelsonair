import Image from "next/image";
import install1 from "../Components/Images/nelsonAir_Installation01.png";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function InstallReplacement() {
  return (
    <>
      <div className="mt-36 mb-8 text-2xl font-bold text-sky-900 text-center">
        Orange County Air Conditioning Installation
      </div>
      <div className="text-sky-900 text-xl px-2 pb-2 font-bold">
        Looking for an Orange County air conditioning installation provider?
        Call Nelson Air to get the job done fast and done right!
      </div>
      <div className="text-sky-900 px-2 pb-2">
        When the time comes to replace the current air conditioning system in
        your Orange County, CA home, count on the service professionals at
        Nelson Air to complete your air conditioning installation correctly and
        affordably.
      </div>
      <div className="text-sky-900 px-2 pb-2">
        Call or Text us Now @ <span className="font-bold">949-275-1615</span>
      </div>
      <div className="flex justify-center">
        <div className=" relative ">
          <div className="relative">
            <Image
              src={install1}
              alt="Yoga Barn"
              className=" object-cover h-full max-h-96   "
            />
          </div>
          <div className="absolute top-1/2 left-2 lg:left-48  transform  -translate-y-1/2 text-white  ">
            <h1 className="font-bold  text-4xl  mx-3 text-white">
              SCHEDULE YOUR AC INSTALLATION OR REPLACEMENT
            </h1>
            <div className=" text-2xl font-bold   mx-3 ">
              <p className=" leading-6">
                Call For a <br />
                Free Estimate
              </p>{" "}
              <p className="text-lg text-sky-200">HEATING & A/C</p>
            </div>
            <Link href="/signUpPage">
              <button className="bg-sky-500 px-4 py-2 tracking-wider mt-4 rounded-full text-white">
                CALL NOW
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="text-sky-900 px-2 pt-2">
        When our Orange County summer days send the mercury skyrocketing, having
        a dependable air conditioning system cooling your whole home is a
        necessity. The cool indoor comfort can provide a respite from the
        oppressive heat outside and make it easier to sleep at night.
      </div>
      <div className="text-sky-900 py-4 px-2 text-2xl font-bold text-center">
        Improved Energy Efficiency
      </div>
      <div className="  text-sky-900 px-2">
        As your old A/C system deteriorated with age, it had to work that much
        harder to cool the air inside your home. This means it was necessary for
        it to consume more energy to deliver the desired temperature. When you
        consider this and the significant difference in energy efficiency of
        current air conditioning systems and those manufactured only 15 or 20
        years ago, it&apos;s easy to see how switching to a new,
        state-of-the-art system will represent substantial savings on your
        energy bills.
      </div>
      <div className="text-sky-900 py-4 px-2 text-2xl font-bold text-center">
        Experience You Can Trust
      </div>
      <div className="  text-sky-900 px-2">
        You may not be entirely sure if your current HVAC system really needs to
        be replaced or if a repair might just be sufficient. You can rely on the
        experts from Baker Brothers to give you the whole truth. We won&apos;t
        suggest you buy a new air conditioning system if a less expensive repair
        will return your old one to good reliable order. If it is indeed time to
        replace your A/C system, we will also provide you with all the
        information you need to choose the model that will best meet your needs.
      </div>
      <div className="  text-sky-900 px-2">
        Installing a new air conditioning system is not a job for a weekend
        warrior. The installation must be completed in accordance with local and
        state building codes and following the manufacturer&apos;s
        specifications in order to protect your warranty. The job demands a
        licensed and trained professional like the ones at Nelson Air.
      </div>
      <div className="text-sky-900 py-4 px-2 text-2xl font-bold text-center">
        Regular Maintenance Of Your New Air Conditioning System
      </div>
      <div className="  text-sky-900 px-2 pb-2">
        Once your new A/C system has been professionally installed, it should
        provide you with years of worry-free cool comfort. Nevertheless, we
        strongly recommend commencing your annual service and maintenance
        appointments the year following its installation in order to keep your
        system working as efficiently as possible and to prolong its service
        life.
      </div>
    </>
  );
}
