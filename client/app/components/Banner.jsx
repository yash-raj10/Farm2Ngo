import React from "react";
import farm2nfo from "@/public/farm2nfo.png";

export const Banner = () => {
  return (
    <div
      id="about"
      className=" bg-cyan-200 flex flex-col lg:flex-row md:flex-row justify-around pb-4 md:pb-0  lg:pb-0 px-8"
    >
      <div className=" md:p-16  lg:p-16 m-4 md:m-0 lg:m-0  ">
        <p className="md:text-3xl lg:text-3xl text-2xl font-semibold py-3 md:py-3 lg:py-7 text-center ">
          !!!Book Mart!!!
        </p>
        <p className="md:text-xl font-medium text-base rounded-3xl p-3 bg-white text-black">
          Welcome to BookMart - your one-stop destination for great books!
          Explore our handpicked collection spanning various genres, from
          classics to bestsellers. Enjoy easy browsing and fast shipping. Join
          our community and dive into the world of literature today!
        </p>
      </div>
      <img src={farm2nfo} height={80} alt="book" />
    </div>
  );
};
