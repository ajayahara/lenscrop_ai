import Image from "next/image";
export const Navbar = () => {
  return (
    <header className="bg-white h-[16vh] flex items-center shadow px-24">
      <nav className="w-full">
        <div className="w-full flex justify-between items-center">
          <a href="/home">
            <Image
              height={80}
              width={80}
              src="/nav_logo.webp"
              alt="lenscrop logo"
            ></Image>
          </a>
          <ul className="flex gap-4 items-center text-md">
            <li>
              <a href="/makemyweb" className="hover:text-[#c2efe7]">
                MakeMyWeb
              </a>
            </li>
            <li>
              <a href="/home" className="hover:text-[#c2efe7]">
                Home
              </a>
            </li>
            <li>
              <a href="/company" className="hover:text-[#c2efe7]">
                Company
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-[#c2efe7]">
                Blog
              </a>
            </li>
            <li>
              <button className="flex items-center">
                <Image
                  width={20}
                  height={20}
                  src="/moon.svg"
                  alt="moon icon"
                ></Image>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
