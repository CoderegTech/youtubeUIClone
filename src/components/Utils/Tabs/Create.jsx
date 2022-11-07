import React from "react";
import { IoIosCreate } from "react-icons/io";
import { MdWifiTethering } from "react-icons/md";
import { RiVideoLine } from "react-icons/ri";

function Create() {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute top-14 right-1 h-auto  py-2 rounded-xl bg-secondary z-50"
    >
      <div className="flex gap-4 px-5 py-2 items-center cursor-pointer text-white hover:bg-white/10">
        <RiVideoLine className="text-2xl" />
        <p className="text-sm text-white/80">Upload video</p>
      </div>
      <div className="flex gap-4 px-5 py-2 items-center cursor-pointer text-white hover:bg-white/10">
        <MdWifiTethering className="text-2xl" />
        <p className="text-sm text-white/80">Go live</p>
      </div>
      <div className="flex gap-4 px-5 py-2 items-center cursor-pointer text-white hover:bg-white/10">
        <IoIosCreate className="text-2xl" />
        <p className="text-sm text-white/80">Create Post</p>
      </div>
    </div>
  );
}

export default Create;
