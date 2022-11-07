import React from "react";
import { AiFillHome } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";
import { MdOutlineSubscriptions, MdVideoLibrary } from "react-icons/md";
import { RiCompass3Line } from "react-icons/ri";
const NavigationBar = () => {
  return (
    <div className="md:hidden fixed bottom-0 w-full z-50 bg-primary px-3 py-2 border-t border-white/30">
      <ul className=" w-full flex gap-8 justify-center items-center ">
        <li className="flex flex-col items-center">
          <AiFillHome className="text-white text-2xl" />
          <span className="text-white/80 text-[10px]">Home</span>
        </li>
        <li className="flex flex-col items-center">
          {" "}
          <RiCompass3Line className="text-white text-2xl" />
          <span className="text-white/80 text-[10px]">Shorts</span>
        </li>
        <li className="pl-5">
          <GrAddCircle className=" invert text-3xl" />
        </li>
        <li className="flex flex-col items-center">
          <MdOutlineSubscriptions className="text-white text-2xl" />
          <span className="text-white/80 text-[10px]">Subscriptions</span>
        </li>
        <li className="flex flex-col items-center">
          <MdVideoLibrary className="text-white text-2xl" />
          <span className="text-white/80 text-[10px]">Library</span>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
