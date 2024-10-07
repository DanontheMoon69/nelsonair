"use client";
import Image from "next/image";
import technician from "./Components/Images/nelsonAirTechnician.png";
import acUnit from "./Components/Images/traneACunit.jpg";
import Link from "next/link";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { send } from "emailjs-com";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });
  const route = useRouter();

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_g0cucze", "template_jfb1v6e", toSend, "HYY8JDeeZmiQZ-f79")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Thank you for your email! We will get back to you soon!");
        route.push("/");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        alert(err);
      });
  };
  return (
    <>
      <div className="flex justify-center ">
        <div className=" relative pt-32 ">
          <div className="relative">
            <Image
              src={acUnit}
              alt="Yoga Barn"
              className=" object-cover h-full max-h-96   "
            />
          </div>
          <div className="absolute top-1/2 left-2 lg:left-48  transform  -translate-y-1/2 text-white  pt-3 ">
            <h1 className="font-bold  text-4xl pt-16  mx-3 text-white">
              NEW SYSTEMS THAT FIT YOUR BUDGET
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
      <div className="flex-col justify-center items-center">
        <div className="flex-col  justify-center bg-sky-900 p-4 sm:px-14 md:px-20">
          <p className="text-3xl font-bold sm:text-4xl">
            The Best Air Conditioning Repair & Replacement in Orange County, CA
          </p>{" "}
          <div className="font-bold text-white mt-2">
            In need of An HVAC specialist for your A/C system?
            <br />
            <div className="flex items-center py-1">
              <IoIosCheckmarkCircle className="mr-1 text-sky-400" /> Call or
              Text
              <span className="text-sky-300 px-2">949-275-1615</span> or{" "}
              <span className="text-sky-300 px-2">Email Us</span>
            </div>
          </div>
          <div className="flex items-center py-1">
            <IoIosCheckmarkCircle className="mr-1" />
            Expertly trained HVAC technicians
          </div>
          <div className="flex items-center py-1">
            <IoIosCheckmarkCircle />
            <span className="font-bold mx-1">Emergency</span> AC Repair Service{" "}
            <br />
          </div>
          <div className="flex items-center py-1">
            <IoIosCheckmarkCircle className="mr-1" />
            <span className="font-bold">100% Satisfaction Guarantee</span>
          </div>
          <div className="flex items-center leading-tight py-1">
            <div>
              <IoIosCheckmarkCircle className="mr-1 leading-snug" />
            </div>{" "}
            A Licensed, Insured & Bonded HVAC Contractor in Orange County, CA
          </div>
        </div>

        <div className="flex-col md:w-1/2 justify-center p-18">
          <ul className="text-sky-900 ">
            <li className="p-2 hover:text-sky-500 cursor-pointer">
              <div className="flex items-center">
                AC Lifetime Warranty <AiOutlineDoubleRight className="ml-2" />
              </div>
            </li>

            <li className="p-2 hover:text-sky-500 cursor-pointer">
              <Link href="/ac-repair-maintenance" className="flex items-center">
                Air Conditioning Repair & Maintenance
                <AiOutlineDoubleRight className="ml-2" />
              </Link>
            </li>

            <li className="p-2 hover:text-sky-500 cursor-pointer">
              <Link
                href="/ac-installation-replacement"
                className="flex items-center"
              >
                AC Installation & Replacement
                <AiOutlineDoubleRight className="ml-2" />
              </Link>
            </li>
            <li className="p-2 hover:text-sky-500 cursor-pointer">
              <div className="flex items-center">
                AC Filter Replacements
                <AiOutlineDoubleRight className="ml-2" />
              </div>
            </li>
            <li className="p-2 hover:text-sky-500 cursor-pointer">
              <div className="flex items-center">
                {" "}
                Indoor Air Quality
                <AiOutlineDoubleRight className="ml-2" />
              </div>
            </li>
            <li className="p-2 hover:text-sky-500 cursor-pointer">
              <div className="flex items-center">
                {" "}
                Heating & Furnaces
                <AiOutlineDoubleRight className="ml-2" />
              </div>
            </li>
            <li className="p-2 hover:text-sky-500 cursor-pointer">
              <div className="flex items-center">
                {" "}
                Thermostats
                <AiOutlineDoubleRight className="ml-2" />
              </div>
            </li>
            <li className="p-2 hover:text-sky-500 cursor-pointer">
              <div className="flex items-center">
                Evaporator Coils
                <AiOutlineDoubleRight className="ml-2" />
              </div>
            </li>
            <li className="p-2 hover:text-sky-500 cursor-pointer">
              <Link href="/air-handler-services" className="flex items-center">
                Air Handlers
                <AiOutlineDoubleRight className="ml-2" />
              </Link>
            </li>
            <li className="p-2 hover:text-sky-500 cursor-pointer">
              <div className="flex items-center">
                {" "}
                Ductless Mini-Split Systems
                <AiOutlineDoubleRight className="ml-2" />
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-sky-900 font-bold text-center">
        <div className="flex justify-center mb-4">
          <div className=" relative  ">
            <div className="relative">
              <Image
                src={technician}
                alt="Yoga Barn"
                className=" object-cover h-full max-h-96   "
              />
            </div>
            <div className="absolute top-1/2 left-2 lg:left-48  transform  -translate-y-1/2 text-white  pt-3 ">
              <h3 className="font-bold  text-4xl pt-2  mx-3 text-white">
                FAST AFFORDABLE SERVICE
              </h3>
              <div className=" text-2xl font-bold lg:text-3xl  mx-3 ">
                <p className=" leading-6 text-base">
                  Call to Schedule an Appointment
                </p>
              </div>
              <Link href="/signUpPage">
                <button className="bg-sky-500 px-4 py-2 tracking-wider mt-4 rounded-full text-white">
                  CALL NOW
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className=" flex-auto justify-center items-center align-middle">
          <div className=" text-3xl px-4">
            For all your Orange County Air Conditioning Repair needs, call the
            area HVAC experts at Nelson Air today at{" "}
            <span className="text-sky-500">949-275-1615</span>
          </div>

          <div className="text-sm mt-6 text-left">
            <div className="text-2xl px-4">
              Service and Repairs for Your Air Conditioning System
            </div>
            <div className="  font-thin px-4 py-3">
              <span className=" font-bold pr-1">
                How Do You Know When You Need Air Conditioner Repair in Orange
                County?
              </span>
              Several things can impede the proper function of your air
              conditioning system. The accumulation of caked on grime and dirt
              on the condenser coil located outside can force the system to work
              harder and waste energy. A leak in the coils can result in
              insufficient refrigerant in the system. Other common culprits for
              malfunctioning air conditioning systems include a clogged A/C
              drain and faulty electric controls or sensors. The service
              professionals at Nelson Air will use the latest technology and
              tools to diagnose your air conditioning system&apos;s problem and
              correct it quickly and cost-effectively. Our technicians will
              arrive at your home with fully stocked trucks with the tools and
              equipment they need to complete almost all jobs within one visit.
            </div>{" "}
            <div className="flex items-center px-4 font-base py-2 text-sky-500 cursor-pointer hover:text-sky-700">
              Nelson Air HVAC Lifetime Warranty
              <AiOutlineDoubleRight className="ml-2" />
            </div>{" "}
            <div className="  font-thin px-4 py-3">
              Nelson Air has the best HVAC technicians in the business that can
              service and repair your HVAC units whenever they have issues. They
              specialize in everything from condensers, coils, air ducts, air
              filtration to complete HVAC unit replacements and HVAC
              installations with the best warranties in Dallas / Fort Worth. Our
              licensed and trained HVAC professionals are experts in the
              services you need to get your HVAC system up and running again.
              Our customers can count on us for quick and efficient air
              conditioning services and repairs in the DFW metroplex. Our
              friendly customer service and expert technicians are the main
              reasons why so many of our customers consider us to be the best AC
              service company in the Dallas area!
            </div>
            <div className="  font-thin px-4 py-3">
              Here at Nelson Air, we know just how unbearable the heat in Orange
              County can be. That&apos;s why we want your home&apos;s air
              conditioning unit to be functioning properly. Whether you have a
              problem that you want to be solved now or just want to do
              preventative maintenance, we can help. Contact us today to
              schedule your HVAC service or repair in the Orange County area!
            </div>
            <div className=" text-base font-thin px-4 py-3">
              <div className="flex text-sm items-center tracking-wider leading-none py-2">
                <div>
                  <IoIosCheckmarkCircle className="text-2xl mx-2" />
                </div>
                All services carried out by State registered, highly trained
                service technicians
              </div>
              <div className="flex text-sm items-center tracking-wider leading-none py-2">
                <div>
                  <IoIosCheckmarkCircle className="text-2xl mx-2" />
                </div>
                All Leading Brands of Heating & Cooling Systems Serviced
              </div>
              <div className="flex text-sm items-center tracking-wider leading-none py-2">
                <div>
                  <IoIosCheckmarkCircle className="text-2xl mx-2" />
                </div>
                Air Condition & Heating System Parts, Labor, & Service
                Guarantees
              </div>
              <div className="flex text-sm items-center tracking-wider leading-none py-2">
                <div>
                  <IoIosCheckmarkCircle className="text-2xl mx-2" />
                </div>
                Cost Efficient HVAC System Installations
              </div>{" "}
              <div className="flex text-sm items-center tracking-wider leading-none py-2">
                <div>
                  <IoIosCheckmarkCircle className="text-2xl mx-2" />
                </div>
                Aid with Rebate & Incentive Programs by Utility Companies,
                Manufacturers, and Other Agencies
              </div>
              <div className="flex items-center text-sm tracking-wider leading-none py-2">
                <div>
                  <IoIosCheckmarkCircle className="text-2xl mx-2" />
                </div>
                Home Energy Usage Audits
              </div>{" "}
              <div className="flex items-center text-sm tracking-wider leading-none py-2">
                <div>
                  <IoIosCheckmarkCircle className="text-2xl mx-2" />
                </div>
                Fast, Reliable & Trusted Air Conditioning & Heating System
                Repairs, Service & Installation
              </div>
            </div>
            {/* CONTACT BLOCK */}
            <div className=" block w-5/8  items-center justify-center align-middle mb-10 py-2 px-4">
              <iframe
                src="https://maps.google.com/maps?q=501%20N%20union%20st,%20Whitesboro%20Tx&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-48 w-full rounded-xl mt-2 "
                frameborder="0"
                allowfullscreen
              ></iframe>

              <div className="flex items-center justify-center text-xs sm:text-sm font-semibold mt-2 text-center text-gray-600">
                Address: 5062 Casa Oro Dr, Yorba Linda, CA 92886
              </div>
              <div className="flex justify-center mt-3">
                <form onSubmit={onSubmit} className="w-full ">
                  <div className="flex justify-center mt-4 mb-4 text-sm sm:text-lg font-bold text-sky-600">
                    Send us a message!
                  </div>
                  <div class="form-group mb-6">
                    <input
                      type="text"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Name"
                      name="from_name"
                      //value={toSend.from_name}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="form-group mb-6">
                    <input
                      type="reply_to"
                      //value={toSend.reply_to}
                      name="reply_to"
                      onChange={handleChange}
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div class="form-group mb-6">
                    <input
                      type="reply_to"
                      //value={toSend.reply_to}
                      name="reply_to"
                      onChange={handleChange}
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Email Address"
                    />
                  </div>
                  <div class="form-group mb-6">
                    <textarea
                      class="
              form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      rows="3"
                      name="message"
                      placeholder="Message"
                      //value={toSend.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    class=" w-full px-6 py-2.5 bg-sky-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  transform hover:scale-105  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out mb-10"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
