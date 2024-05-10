import Image from "next/image";
import React from "react";

export const Landing = () => {
  return (
    <div className="w-full h-[83vh] relative text-white py-14 px-48" >
      <Image
        src="/img1.webp"
        alt="landing image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-[-1]"
      ></Image>
      <div className="w-1/2">
        <h1 className="text-7xl font-medium railway" >We are at the forefront of AI</h1>
        <p className="text-xl mt-6 mb-6">
          From Conserving Wildlife to Automatically Generating Caricatures–{" "}
          <span className="text-xl font-bold">We Do It All</span>
        </p>
        <a href="./about">
          <button className="px-8 py-3 bg-white rounded-lg text-black text-lg">Learn More</button>
        </a>
      </div>
    </div>
  );
};
