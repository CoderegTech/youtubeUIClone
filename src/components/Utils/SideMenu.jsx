import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import Navlist from "./NavList";
function SideMenu() {
  const [list, setList] = useState(Navlist);

  return (
    <ul className="absolute left-0 -translate-x-full md:relative md:translate-x-0 w-56 overflow-y-auto px-2 bg-primary z-50 scroll sidemenu">
      <li className="flex gap-4 items-center w-full py-1 px-7 bg-secondary rounded-xl">
        <div className="text-[20px] invert">
          <AiFillHome />
        </div>
        <p className="cursor-pointer text-white text-base whitespace-nowrap py-1 px-2">
          Home
        </p>
      </li>

      {list[0]?.map(({ id, icon, title }) => {
        return (
          <li
            key={id}
            className="flex gap-4 items-center w-full py-1 px-7 hover:bg-secondary rounded-xl"
          >
            <div className="text-[20px] invert">{icon}</div>
            <p className="cursor-pointer text-white text-base whitespace-nowrap py-1 px-2">
              {title}
            </p>
          </li>
        );
      })}

      <span className=" w-full h-[1px] bg-secondary block my-2"></span>
      {list[1]?.map(({ id, icon, title }) => {
        return (
          <li
            key={id}
            className="flex gap-4 items-center w-full py-1 px-7 hover:bg-secondary rounded-xl"
          >
            <div className="text-[20px] invert">{icon}</div>
            <p className="cursor-pointer text-white text-base whitespace-nowrap p-1">
              {title}
            </p>
          </li>
        );
      })}
      <span className="w-full h-[1px] bg-secondary block my-2"></span>
      <p className="text-neutral-400 px-5 py-3">SUBSCRIPTIONS</p>
      {list[2]?.map(({ id, channel, profileUrl }) => {
        return (
          <li
            key={id}
            className="relative flex gap-4 items-center  w-full py-1 px-7 hover:bg-secondary rounded-xl"
          >
            <div className="w-6 h-6 shrink-0">
              <img
                className=" w-full h-full rounded-full bg-white object-cover"
                src={profileUrl}
                alt=""
              />
            </div>
            <p className="cursor-pointer text-white text-start text-base whitespace-nowrap p-1">
              {channel}
            </p>
          </li>
        );
      })}
      <li className="w-full py-1 px-7">
        <p className="flex items-center gap-6 text-white ">
          <IoIosArrowDown className="text-lg" />{" "}
          <span className="text-base">See 357 more</span>
        </p>
      </li>
      <span className=" w-full h-[1px] bg-secondary block my-2"></span>
      <p className="text-neutral-400 px-5 py-3">EXPLORE</p>
      {list[3]?.map(({ id, icon, title }) => {
        return (
          <li
            key={id}
            className="flex gap-4 items-center w-full py-1 px-7 hover:bg-secondary rounded-xl"
          >
            <div className="text-[20px] invert">{icon}</div>
            <p className="cursor-pointer text-white text-base whitespace-nowrap p-1">
              {title}
            </p>
          </li>
        );
      })}

      <span className=" w-full h-[1px] bg-secondary block my-2"></span>

      {list[4]?.map(({ id, icon, title }) => {
        return (
          <li key={id} className="flex gap-4 items-center w-full py-1 px-7">
            <div className="text-[20px] invert">{icon}</div>
            <p className="cursor-pointer text-white text-base whitespace-nowrap p-1">
              {title}
            </p>
          </li>
        );
      })}
      <div className="w-full p-5">
        <ul className="flex flex-wrap gap-1 text-[11px] text-neutral-400">
          <li>About</li>
          <li>Press</li>
          <li>Copyright</li>
          <li>Contact us</li>
          <li>Creator</li>
          <li>Advertise</li>
          <li>Developers</li>
        </ul>
        <ul className="py-4 flex flex-wrap gap-1 text-[11px] text-neutral-400">
          <li>Terms</li>
          <li>Privacy</li>
          <li>Policy &amp; Safety </li>
          <li>How Youtube works</li>
          <li>Test new features</li>
        </ul>
        <span className="text-[11px] text-neutral-500">
          &copy; 2022 Codereg Tech
        </span>
      </div>
    </ul>
  );
}

export default SideMenu;
