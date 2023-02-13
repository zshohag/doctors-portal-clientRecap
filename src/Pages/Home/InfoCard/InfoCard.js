import React from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BiPhoneCall } from "react-icons/bi";
const InfoCard = () => {
  return (
    <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-4 py-10 ">
      <div className="flex justify-between items-center bg-cyan-600 text-white sm:p-4 md:p-2 lg:p-14  ">
        <div>
          <AiOutlineFieldTime className="w-20 h-20 " />
        </div>
        <div>
          <h2 className="text-2xl">Opening Hours</h2>
          <p className="text-sm mt-2 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
            adipisci.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center bg-gray-600 text-white sm:p-4 md:p-2 lg:p-6  ">
        <div>
          <CiLocationOn className="w-20 h-20 " />
        </div>
        <div>
          <h2 className="text-2xl">Visit our location </h2>
          <p className="text-sm mt-2 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
            adipisci.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center bg-cyan-600 text-white sm:p-4 md:p-2 lg:p-6  ">
        <div>
          <BiPhoneCall className="w-20 h-20 " />
        </div>
        <div>
          <h2 className="text-2xl">Contact us now </h2>
          <p className="text-sm mt-2 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
            adipisci.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
