import React from "react";
import farm2nfo from "@/public/farm2nfo.png";

export const Banner = () => {
  return (
    <div
      id="about"
      className=" bg-blue-500 flex flex-col lg:flex-row md:flex-row justify-around pb-4 md:pb-0  lg:pb-0 pr-8"
    >
      <div className=" md:p-12  lg:p-12 m-4 md:m-0 lg:m-0  ">
        <p className="md:text-4xl lg:text-4xl font-semibold py-3 md:py-3 lg:py-7 text-left text-4xl ">
          Farm2Ngo.
        </p>
        <p className="md:text-lg font-medium text-base rounded-2xl py-2 px-3 bg-white text-gray-700">
          Bridge the gap between farmers with excessive crops and NGOs aiming to
          alleviate hunger and food insecurity. Farm2Ngo facilitates the
          efficient distribution of surplus crops from areas with low demand to
          regions where there is a greater need.
        </p>
      </div>
      <div className="flex justify-center items-center p-5 lg:h-80 lg:w-96 ">
        {" "}
        <img
          src="https://raw.githubusercontent.com/yash-raj10/Farm2Ngo/main/client/public/farm2nfo.png"
          alt="logo"
        />
      </div>
    </div>
  );
};
