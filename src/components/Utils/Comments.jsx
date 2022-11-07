import React from "react";
import { BiDislike, BiLike } from "react-icons/bi";
const Comments = () => {
  return (
    <>
      <div className="flex gap-3 items-start ">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src="https://lh3.googleusercontent.com/ogw/AOh-ky3BKT766KKmmlN3p6VF0nI3BjiqPbpiAzvBUu2h=s32-c-mo"
          alt=""
        />
        <div className="w-full ">
          <div className="flex gap-2 ">
            <p className="text-sm text-white">CoderegTech</p>
            <span className="text-[13px] text-neutral-500">32 minutes ago</span>
          </div>
          <p className="text-white text-[15px] py-1 ">
            This is my comment section
          </p>
          <div className="flex gap-4 items-center text-white">
            <p className="flex gap-2 items-center">
              <BiLike className="text-base" />
              <p></p>
            </p>
            <p className="flex gap-2 items-center">
              <BiDislike className="text-base" />
              <p></p>
            </p>
            <p className="text-neutral-500">REPLY</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
