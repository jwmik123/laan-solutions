"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Header = () => {
  console.log(
    "%cWebsite by %cMik Development!",
    "color: white; font-size: 12px;",
    "color: orange; font-size: 14px; font-weight: bold;",
    "https://mikdevelopment.nl"
  );
  const pathname = usePathname();
  const router = useRouter();
  return (
    <header className="fixed top-0 z-50 flex items-center justify-between w-full h-24 px-5 py-5 font-sans md:px-10 lg:px-20 ">
      <div
        className="text-3xl font-bold cursor-pointer text-primary-500"
        onClick={() => router.back()}
      >
        {pathname.includes("/labs") ||
        pathname.includes("/laps") ||
        pathname.includes("/lads")
          ? pathname
              .slice(
                pathname.indexOf("/") + 1,
                pathname.indexOf("/", pathname.indexOf("/") + 1) !== -1
                  ? pathname.indexOf("/", pathname.indexOf("/") + 1)
                  : pathname.length
              )
              .toUpperCase()
          : "LAAN"}
      </div>
      <div
        className="flex flex-col items-center justify-center w-12 h-full cursor-pointer"
        onClick={(e) => {
          const firstLine = e.currentTarget.children[0];
          const secondLine = e.currentTarget.children[1];
          firstLine.classList.toggle("translate-y-0");
          firstLine.classList.toggle("-translate-y-1");
          secondLine.classList.toggle("translate-y-0");
          secondLine.classList.toggle("-translate-y-0.5");
        }}
      >
        <div className="w-full h-0.5 bg-primary-500 -translate-y-1 transition-transform duration-300"></div>
        <div className="w-full h-0.5 bg-primary-500 translate-y-1 transition-transform duration-300"></div>
      </div>
    </header>
  );
};

export default Header;
