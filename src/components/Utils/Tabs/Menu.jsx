import React from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import {
  BsBoxArrowInRight,
  BsHexagon,
  BsPersonSquare,
  BsShieldExclamation,
} from "react-icons/bs";
import { FaRegKeyboard } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { MdLanguage, MdOutlineSwitchAccount } from "react-icons/md";
import { RiFeedbackLine, RiShieldUserLine } from "react-icons/ri";
import { TbLanguage, TbMoon } from "react-icons/tb";

function Menu() {
  const active = true;

  return (
    <div className="menu-tab absolute top-2 right-20 rounded-xl  bg-secondary z-50 overflow-hidden">
      <header className="flex items-center gap-3 p-4 border-b border-white/10">
        <div className="w-10 h-10 relative">
          <img
            className=" w-full h-full bg-white object-cover rounded-full"
            src="https://lh3.googleusercontent.com/ogw/AOh-ky3BKT766KKmmlN3p6VF0nI3BjiqPbpiAzvBUu2h=s32-c-mo"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-white text-base md:text-lg">CoderegTech</h1>
          <span className="text-blue-400 text-sm">
            Manage your Google Account
          </span>
        </div>
      </header>
      <ul className="w-full h-full py-2 pb-[100px] overflow-y-auto scroll">
        <li className="w-full flex gap-5 items-center  py-2 px-5 hover:bg-white/10">
          <BsPersonSquare className="text-white text-lg" />
          <p className="text-white text-[14px]">Your channel</p>
        </li>
        <li className="w-full flex gap-5 items-center  py-2 px-5 hover:bg-white/10">
          <BsHexagon className="text-white text-lg" />
          <p className="text-white text-[14px]">Youtube Studio</p>
        </li>
        <li className="relative w-full flex gap-5 items-center  py-2 px-5 hover:bg-white/10">
          <MdOutlineSwitchAccount className="text-white text-lg" />
          <p className="text-white text-[14px]">Switch account</p>

          <IoIosArrowForward className="text-white text-lg absolute right-5" />
        </li>
        <li className="w-full flex gap-5 items-center  py-2 px-5 hover:bg-white/10">
          <BsBoxArrowInRight className="text-white text-lg" />
          <p className="text-white text-[14px]">Sign out</p>
        </li>
        {/* border line */}
        <span className=" w-full h-[1px] border-b border-white/10 inline-block my-2"></span>

        <li className="w-full flex gap-5 items-center  py-2 px-5 hover:bg-white/10">
          <AiOutlineDollar className="text-white text-lg" />
          <p className="text-white text-[14px]">Purchases and memberships</p>
        </li>
        <li className="w-full flex gap-5 items-center  py-2 px-5 hover:bg-white/10">
          <RiShieldUserLine className="text-white text-lg" />
          <p className="text-white text-[14px]">Your data in Youtube</p>
        </li>
        {/* border line */}
        <span className=" w-full h-[1px] border-b border-white/10 inline-block my-2"></span>

        <li className="relative w-full flex gap-5 items-center  py-2 px-5 hover:bg-white/10">
          <TbMoon className="text-white text-lg " />

          <p className="text-white text-[14px]">Appearance: Dark</p>

          <IoIosArrowForward className="text-white text-lg absolute right-5" />
        </li>
        <li className="relative w-full flex gap-5 items-center  py-2 px-5 hover:bg-white/10">
          <TbLanguage className="text-white text-lg" />
          <p className="text-white text-[14px]">Language: British English</p>

          <IoIosArrowForward className="text-white text-lg absolute right-5" />
        </li>
        <li className="relative w-full flex gap-5 items-center  py-2 px-5 hover:bg-white/10">
          <BsShieldExclamation className="text-white text-lg" />
          <p className="text-white text-[14px]">Restricted Mode: Off</p>

          <IoIosArrowForward className="text-white text-lg absolute right-5" />
        </li>
        <li className="relative w-full flex gap-5 items-center  py-2 px-5 hover:bg-white/10">
          <MdLanguage className="text-white text-lg" />
          <p className="text-white text-[14px]">Location: Philippines</p>

          <IoIosArrowForward className="text-white text-lg absolute right-5" />
        </li>
        <li className="w-full flex gap-5 items-center  py-2 px-5 hover:bg-white/10">
          <FaRegKeyboard className="text-white text-lg" />
          <p className="text-white text-[14px]">Keyboard shortcuts</p>
        </li>
        <span className=" w-full h-[1px] border-b border-white/10 inline-block my-2"></span>
        <li className="w-full flex gap-5 items-center  py-2 px-5 hover:bg-white/10">
          <FiSettings className="text-white text-lg" />
          <p className="text-white text-[14px]">Keyboard shortcuts</p>
        </li>

        <span className=" w-full h-[1px] border-b border-white/10 inline-block my-2"></span>
        <li className="w-full flex gap-5 items-center  py-2 px-5 hover:bg-white/10">
          <BiHelpCircle className="text-white text-lg" />
          <p className="text-white text-[14px]">Help</p>
        </li>
        <li className="w-full flex gap-5 items-center  py-2 px-5 hover:bg-white/10">
          <RiFeedbackLine className="text-white text-lg" />
          <p className="text-white text-[14px]">Feedback</p>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
