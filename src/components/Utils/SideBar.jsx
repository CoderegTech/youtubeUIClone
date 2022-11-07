import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineSubscriptions, MdVideoLibrary } from "react-icons/md";
import { RiCompass3Line } from "react-icons/ri";
const SideBar = () => {
  return (
    <>
      <ul className="hidden relative md:flex flex-col gap-3 py-3 px-1">
        <li className="flex flex-col items-center w-full rounded-xl py-3 hover:bg-secondary">
          <AiFillHome className="text-white text-xl" />
          <p className="cursor-pointer text-white text-[11px] whitespace-nowrap py-1 px-2">
            Home
          </p>
        </li>
        <li className="flex flex-col items-center w-full rounded-xl py-3 hover:bg-secondary">
          <RiCompass3Line className="text-white text-xl" />
          <p className="cursor-pointer text-white text-[11px] whitespace-nowrap py-1 px-2">
            Shorts
          </p>
        </li>
        <li className="flex flex-col items-center w-full rounded-xl py-3 hover:bg-secondary">
          <MdOutlineSubscriptions className="text-white text-xl" />
          <p className="cursor-pointer text-white text-[11px] whitespace-nowrap py-1 px-2">
            Subscriptions
          </p>
        </li>
        <li className="flex flex-col items-center w-full rounded-xl py-3 hover:bg-secondary">
          <MdVideoLibrary className="text-white text-xl" />
          <p className="cursor-pointer text-white text-[11px] whitespace-nowrap py-1 px-2">
            Library
          </p>
        </li>
      </ul>
    </>
  );
};

export default SideBar;
