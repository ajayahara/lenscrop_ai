import Image from "next/image";
const socials = [
  { name: "Facebook", path: "/facebook.svg" },
  { name: "Instagram", path: "/instagram.svg" },
  { name: "LinkedIn", path: "/linkedin.svg" },
  { name: "Discord", path: "/discord.svg" },
  { name: "X", path: "/x.svg" },
];

const sitemap = ["MakeMyWeb", "Services", "Products", "Blogs", "Life at LENS"];

const connects = [
  "+1-517-9300-792",
  "+91-9990-736-796",
  "solutions@lenscorp.ai",
];

export const Footer = () => {
  return (
    <footer className="w-full border-gray-600 border-t border-1">
      <div className="w-full flex justify-between py-14 px-36">
        <div>
          <Image src="/image2.webp" alt="Logo 2" height={70} width={70}></Image>
          <p>Tomorrow&apos;s Vision, Today!</p>
          <div className="flex gap-4 mt-16">
            {socials.map((el, i) => {
              return (
                <a href="/" key={i}>
                  <Image
                    src={el.path}
                    alt={el.name}
                    height={30}
                    width={30}
                    className="white-image"
                  ></Image>
                </a>
              );
            })}
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-medium">SITEMAP</h3>
          <ul className="flex flex-col gap-2 text-md">
            {sitemap.map((el, i) => {
              return (
                <li key={i}>
                  <a href="/">{el}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-medium">CONNECT</h3>
          <ul className="flex flex-col gap-2 text-md">
            {connects.map((el, i) => {
              return (
                <li key={i}>
                  <a href="/">{el}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="py-10 px-24 flex justify-between bg-[#242424] text-lg">
        <div>
          <p>2023 LENS, Inc. All rights reserved.</p>
        </div>
        <div className="flex gap-6">
          <p>Code of conduct</p>
          <p>Sustainability Goals</p>
        </div>
      </div>
    </footer>
  );
};
