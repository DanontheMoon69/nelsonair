import Image from "next/image";
import tech2 from "../Components/Images/nelsonAirTechnician2.png";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function RepairMaintenance() {
  return (
    <>
      <div className="mt-36 mb-8 text-2xl font-bold text-sky-900 text-center">
        Orange County Air Conditioning Repair & Maintenance
      </div>
      <div className="flex justify-center text-center text-white p-4  text-lg  bg-sky-900">
        <span className=" max-w-5xl">
          For a reliable and trustworthy service professional to take care of
          the air conditioning repair and maintenance in your Orange County, CA
          home, call the experts at Nelson Air at 949-275-1615.
        </span>
      </div>
      <div className="flex justify-center">
        <div className=" relative ">
          <div className="relative">
            <Image
              src={tech2}
              alt="Yoga Barn"
              className=" object-cover h-full max-h-96   "
            />
          </div>
          <div className="absolute top-1/2 left-2 lg:left-48  transform  -translate-y-1/2 text-white  ">
            <h1 className="font-bold  text-4xl  mx-3 text-white">
              SCHEDULE A REPAIR OR MAINTENANCE TODAY
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
      <div className="mt-8 mb-8 text-2xl font-bold text-sky-900 text-center">
        Identifying And Fixing The Problem With Your Air Conditioning System
      </div>
      <div className="text-sky-900 px-2">
        Your A/C system is a complex piece of machinery that, when it is working
        well, can fill your home with cool, comfortable air. When it
        malfunctions, however, the challenge is to find which part of the
        complex and intricate machinery is the root cause of the problem.
      </div>
      <div className="text-sky-900 py-4 px-2">
        Diagnosing the issue demands a trained and experienced air conditioning
        professional. The service experts at Nelson Air are just the right
        technicians for the job.
      </div>
      <div className="mt-8 mb-8 text-2xl font-bold text-sky-900 text-center px-2">
        Common Causes For a Malfunctioning Air Conditioning System
      </div>
      <div className="text-sky-900 px-2">
        Many factors could cause your A/C to malfunction. Some of the more
        common ones include:
      </div>
      <div className="flex py-2 px-2">
        <div className="text-sky-900 py-1 px-2">
          <AiOutlineArrowRight />
        </div>
        <div className="text-sky-900">
          A lack of refrigerant in the system: Insufficient refrigerant will
          force the system to work harder in order to generate cold air. Air
          conditioning systems do not consume or burn refrigerant, therefore, if
          the level is low, it is either the result of a leak or having been
          insufficiently filled at the time of installation.
        </div>
      </div>
      <div className="flex py-2 px-2">
        <div className="text-sky-900 py-1 px-2">
          <AiOutlineArrowRight />
        </div>
        <div className="text-sky-900">
          Grime and dirt on the condenser coil: Dust, dirt and grime can
          accumulate and get caked onto your air conditioner&apos;s condenser
          coil. When the condenser coil is covered by a layer of dirt, it
          becomes more difficult for the refrigerant inside the coil to condense
          back to its liquid form, making the system far less effective.
        </div>
      </div>
      <div className="flex py-2 px-2">
        <div className="text-sky-900 py-1 px-2">
          <AiOutlineArrowRight />
        </div>
        <div className="text-sky-900">
          Blocked air conditioning drain tube: When warm air meets the cold
          evaporator coils, condensation naturally occurs. The accumulated water
          is collected into a drip pan to be drained away from the system. If
          that drain line becomes clogged, the water can back up into the
          system, cover the evaporator coil in ice and impede the functioning of
          the entire system.
        </div>
      </div>
      <div className="flex py-2 px-2">
        <div className="text-sky-900 py-1 px-2">
          <AiOutlineArrowRight />
        </div>
        <div className="text-sky-900">
          Faulty sensors or electrical controls: The compressor and fan in the
          air conditioning system depend upon the flow of electrical current to
          work. If a faulty electrical control interrupts the flow of power, the
          air conditioning system will no longer function properly. The system
          also relies on the sensors inside the thermostat to tell it when to
          turn on and when to shut off. A malfunctioning thermostat sensor could
          cause the air conditioning system to constantly remain on or never
          come on at all.
        </div>
      </div>
    </>
  );
}
