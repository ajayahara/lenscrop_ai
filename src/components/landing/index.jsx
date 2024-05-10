import Image from "next/image";
import React from "react";

export const Landing = () => {
  return (
    <div className="w-full h-[83vh] relative py-14 px-48 z-[2]">
      <Image
        src="/img1.webp"
        alt="landing image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-[-1]"
      ></Image>
      <div className="w-1/2 z-[3]">
        <h1 className="text-7xl font-medium railway">
          We are at the forefront of AI
        </h1>
        <p className="text-xl mt-6 mb-6">
          From Conserving Wildlife to Automatically Generating Caricatures–{" "}
          <span className="text-xl font-bold">We Do It All</span>
        </p>
        <a href="./about">
          <button className="px-8 py-2 bg-white rounded-lg text-black text-lg hover:border hover:border-black hover:border-1 hover:px-10 transition-all delay-100">
            Learn More
          </button>
        </a>
      </div>
    </div>
  );
};
