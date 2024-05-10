import Image from "next/image";

export const Map = () => {
  return (
    <div className="w-full flex h-[100vh]">
      <div className="w-1/2 h-full bg-[#242424] flex justify-center items-center">
        <div>
          <div className="flex flex-col mb-12">
            <span className="text-6xl font-medium">Get in</span>
            <span className="text-6xl font-medium">touch with</span>
            <span className="text-6xl font-medium">us</span>
          </div>
          <p className="text-lg">Send your enquiry now!</p>
          <div className="bg-black p-1 rounded-3xl mt-10">
            <input type="text" placeholder="Enter email address" className="bg-black text-gray-600 text-sm border-none ml-4 outline-none focus:border-none"></input>
            <button className="px-8 py-2 bg-blue-800 rounded-3xl">Request Demo</button>
          </div>
        </div>
      </div>
      <div className="relative w-1/2 h-full">
        <Image
          src="/map.webp"
          alt="map"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="rounded-lg"
        ></Image>
      </div>
    </div>
  );
};
