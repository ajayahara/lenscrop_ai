import Image from "next/image";

export const About = () => {
  return (
    <div className="w-full py-20 px-32">
      <div className="w-full text-center">
        <h1 className="text-6xl font-medium">About Us</h1>
        <div className="w-36 h-2 bg-gradient-to-r from-[#0594ff] to-[#93f3f6] rounded mx-auto mt-2"></div>
      </div>
      <div className="group/item w-[95%] m-auto shadow-md bg-[#1b1c1e] rounded-lg p-10 flex justify-between items-center mt-20 hover:w-full hover:p-14 transition-all delay-150">
        <div className="w-1/2 pr-10 pt-10 flex flex-col gap-10 justify-start h-[400px]">
          <h2 className="text-5xl font-medium">Welcome To LENS</h2>
          <p className="text-gray-500 text-lg">
            We put our hearts, souls and sweat into designing and developing
            custom AI - powered solutions for your business so you don&apos;t
            have to.
          </p>
          <button className="group/arrow px-8 py-2 w-44 rounded-lg border border-white text-white text-lg hover:w-48 hover:border-black hover:bg-white hover:text-black transition-all flex items-center">
            <span>Learn More</span>
            <Image
              src="right_arrow.svg"
              alt="right arrow"
              height={20}
              width={20}
              className="hidden group-hover/arrow:block ml-2 transition-all delay-100"
            ></Image>
          </button>
        </div>
        <div>
          <div className="p-3 rounded-lg bg-white group-hover/item:p-0 transition-all delay-150">
            <div className="relative w-[400px] h-[400px]">
              <Image
                src="/about.webp"
                alt="about"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="rounded-lg"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
