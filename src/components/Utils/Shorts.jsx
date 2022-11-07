import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
const Stories = ({ disActive }) => {
  return (
    <div className="relative w-full h-auto py-5 my-5 border-y-4 border-[#272727] ">
      {/* Shorts header */}
      <div className="w-full flex justify-between items-center px-3">
        <div className="flex gap-2 items-center">
          <img
            className="w-7 h-7 object-cover"
            src="https://www.edigitalagency.com.au/wp-content/uploads/Youtube-shorts-icon-png.png"
            alt=""
          />
          <p className="text-white text-xl">Shorts</p>
        </div>
        <span onClick={disActive}>
          <svg width="20px" height="20px" viewBox="0 0 16 16" version="1.1">
            <rect width="10" height="10" id="icon-bound" fill="none" />
            <polygon
              fill="#cecece"
              points="14.707,2.707 13.293,1.293 8,6.586 2.707,1.293 1.293,2.707 6.586,8 1.293,13.293 2.707,14.707 8,9.414 
	13.293,14.707 14.707,13.293 9.414,8 "
            />
          </svg>
        </span>
      </div>

      {/* Shorts */}
      <div className="w-full flex gap-5 px-5 py-8 overflow-y-auto scroll snap-mandatory snap-x">
        {/* Shorts List */}
        <div className="w-40 shrink-0 grow snap-start shorts-list">
          {/* short thumbnail */}
          <div className="w-full h-64  rounded-xl overflow-hidden">
            <img
              className="w-full h-full bg-white object-cover"
              src="https://i.ytimg.com/vi/OalK-ZONYeU/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAYZ0YJR5JhnukGjXjsbNpHiw75DA"
              alt=""
            />
          </div>

          {/* short content*/}
          <div className="w-full flex justify-between py-3">
            <div className="flex-2">
              <p className="text-white">Guess The Python Output #python...</p>
              <span className="text-white/80 text-sm">69k views</span>
            </div>
            <span className="flex-1 shorts-option-btn ">
              <BiDotsVerticalRounded className="text-2xl text-white" />
            </span>
          </div>
        </div>
        <div className="w-40 shrink-0 grow snap-start shorts-list">
          {/* short thumbnail */}
          <div className="w-full h-64  rounded-xl overflow-hidden">
            <img
              className="w-full h-full bg-white object-cover"
              src="https://i.ytimg.com/vi/6AYLAavW4Mo/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLBtYoZApKG0sdoOd1RNCpmgnNkBnQ"
              alt=""
            />
          </div>
          {/* short content*/}
          <div className="w-full flex justify-between py-3">
            <div className="flex-2">
              <p className="text-white">MrBeast FOR PRESIDENT!</p>
              <span className="text-white/80 text-sm">575k views</span>
            </div>
            <span className="flex-1 shorts-option-btn ">
              <BiDotsVerticalRounded className="text-2xl text-white" />
            </span>
          </div>
        </div>
        <div className="w-40 shrink-0 grow snap-start shorts-list">
          {/* short thumbnail */}
          <div className="w-full h-64  rounded-xl overflow-hidden">
            <img
              className="w-full h-full bg-white object-cover"
              src="https://i.ytimg.com/vi/RCloP9EDjDE/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLBnBqz8Fbap_vzRgXrCE9-xdfYLJw"
              alt=""
            />
          </div>
          {/* short content*/}
          <div className="w-full flex justify-between py-3">
            <div className="flex-2">
              <p className="text-white">
                itadori breaks speed Limit 🚧✨ #amv...
              </p>
              <span className="text-white/80 text-sm">2M views</span>
            </div>
            <span className="flex-1 shorts-option-btn ">
              <BiDotsVerticalRounded className="text-2xl text-white" />
            </span>
          </div>
        </div>
        <div className="w-40 shrink-0 grow snap-start shorts-list">
          {/* short thumbnail */}
          <div className="w-full h-64  rounded-xl overflow-hidden">
            <img
              className="w-full h-full bg-white object-cover"
              src="https://i.ytimg.com/vi/t_hFlbdf6OU/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAKtJ_d2p-chkamZFu2yQOTpBTSiA"
              alt=""
            />
          </div>
          {/* short content*/}
          <div className="w-full flex justify-between py-3">
            <div className="flex-2">
              <p className="text-white">
                I learned a new String method option in...
              </p>
              <span className="text-white/80 text-sm">395k views</span>
            </div>
            <span className="flex-1 shorts-option-btn ">
              <BiDotsVerticalRounded className="text-2xl text-white" />
            </span>
          </div>
        </div>
        <div className="w-40 shrink-0 grow snap-start shorts-list">
          {/* short thumbnail */}
          <div className="w-full h-64  rounded-xl overflow-hidden">
            <img
              className="w-full h-full bg-white object-cover"
              src="https://i.ytimg.com/vi/57AoEm66EZM/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLBeErDvqc7XOXNo2R51wVOi_5f4ew"
              alt=""
            />
          </div>
          {/* short content*/}
          <div className="w-full flex justify-between py-3">
            <div className="flex-2">
              <p className="text-white">Giving Strangers $10,000 If They...</p>
              <span className="text-white/80 text-sm">31M views</span>
            </div>{" "}
            <span className="flex-1 shorts-option-btn ">
              <BiDotsVerticalRounded className="text-2xl text-white" />
            </span>
          </div>
        </div>
        <div className="w-40 shrink-0 grow snap-start shorts-list">
          {/* short thumbnail */}
          <div className="w-full h-64  rounded-xl overflow-hidden">
            <img
              className="w-full h-full bg-white object-cover"
              src="https://i.ytimg.com/vi/Yx2kWxeqjRI/hq720_2.jpg?sqp=-oaymwEdCJYDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAGf0RMRsBj7mQL3AjepVEynzcUnw"
              alt=""
            />
          </div>
          {/* short content*/}
          <div className="w-full flex justify-between py-3">
            <div className="flex-2">
              <p className="text-white">Henry Cavill Ice Bucket Challenge 😍</p>
              <span className="text-white/80 text-sm">5.9M views</span>
            </div>
            <span className="flex-1 shorts-option-btn ">
              <BiDotsVerticalRounded className="text-2xl text-white" />
            </span>
          </div>
        </div>
      </div>

      <span className="absolute bottom-3 left-1/2 -translate-x-1/2">
        <IoIosArrowDown className="text-xl text-white/80" />
      </span>
    </div>
  );
};

export default Stories;
