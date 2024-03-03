"use client";

import Link from "next/link";
import React, { useState } from "react";

import { usePathname } from "next/navigation";
// import { BiWorld } from "react-icons/bi";
// import { IoIosArrowDown } from "react-icons/io";

export default function LocaleSwitcher({ locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const locales = ["en", "ar", "tr"];
  const pathName = usePathname();

  const redirectedPathName = (locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    if (segments[3] !== undefined) {
      return "/" + locale;
    }
    return segments.join("/");
  };

  return (
    <div className="">
      <div className="group relative">
        <button className="flex  h-8 items-center justify-center gap-1 rounded bg-gray-800 px-2 text-white">
          {/* <BiWorld /> */}
          {/* <IoIosArrowDown /> */}
        </button>
        <nav
          tabIndex="0"
          className=" invisible absolute left-0 top-full w-20 rounded border-2 border-gray-800 bg-white opacity-0 transition-all group-focus-within:visible group-focus-within:translate-y-1 group-focus-within:opacity-100"
        >
          <ul className="">
            {locales.map((locale) => {
              return (
                <li key={locale} className="block   ">
                  <Link
                    href={redirectedPathName(locale)}
                    className="block px-8 py-3  text-gray-700 hover:bg-[#2386C8] hover:text-white  "
                  >
                    {" "}
                    {locale}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

//     <ul className='flex gap-x-3'>
//     {/* <div className="hover:text-[#322387cc]  py-2 flex rounded" onClick={toggleDropdown}  > */}
//         {/* Langouge */}
//       {/* <IoIosArrowDown className='mt-1 mr-2' />  </div> */}
//  {i18n?.locales.map(locale => {
//             return (
//                 <li key={locale} className="absolute left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-10">
//                    <Link href={redirectedPathName(locale)} className="block px-4 py-2  text-gray-700 hover:text-[#322387cc] " >  {locale}</Link>
//                    </li>
//         )
//       })}
//       </ul>
