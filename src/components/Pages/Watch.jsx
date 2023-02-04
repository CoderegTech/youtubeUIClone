import React, { useEffect, useRef, useState } from "react";
import {
  BiDislike,
  BiDotsVerticalRounded,
  BiLike,
  BiMenuAltLeft,
  BiShare,
} from "react-icons/bi";
import { BsDot, BsThreeDots } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectedAllVideos } from "../redux/videos/videosSlice";
import Comments from "../Utils/Comments";
import Header from "../Utils/Header";
import SideMenu from "../Utils/SideMenu";

const Watch = () => {
  const [activeInput, setActiveInput] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const [descriptionActive, setDescriptionActive] = useState(false);
  const [activeSideBar, setActiveSideBar] = useState(false);
  const [like, setLike] = useState(143);
  const [dislike, setdisLike] = useState(0);
  const videos = useSelector(selectedAllVideos);

  const navigate = useNavigate();
  const { channelId } = useParams();
  const {
    id,
    channelName,
    channelProfile,
    views,
    uploaded,
    title,
    subscribers,
    likes,
  } =
    videos[0].find((video) => video.channelId === channelId) ||
    videos[1].find((video) => video.channelId === channelId);

  const categories = [
    "Mixes",
    "Javascript",
    "Music",
    "Live",
    "Computers",
    "Sepak Takraw",
    "Playlist",
    "Gaming",
    "Security hackers",
    "Algorithms",
    "Lofi",
    "Computer Programming",
  ];

  const menuRef = useRef();

  useEffect(() => {
    const toggleDropDownMenu = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setActiveSideBar(false);
      }
    };

    document.addEventListener("mousedown", toggleDropDownMenu);
  });

  return (
    <div className="w-full h-screen bg-primary overflow-x-hidden overflow-y-auto scroll">
      <Header toggleSideMenu={() => setActiveSideBar(!activeSideBar)} />

      <div className="h-full w-screen bg-primary relative top-14 flex flex-col md:flex-row justify-between gap-5 px-3 md:px-8 py-2 md:py-4 pb-16">
        {activeSideBar ? (
          <div
            className="fixed top-[60px] left-0 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <SideMenu />
          </div>
        ) : null}

        {/* Watch Video */}
        <div ref={menuRef} className="w-full md:w-[70vw] ">
          <div className=" w-full h-[30vh] md:h-[70vh] bg-white ">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${channelId}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="text-white py-3 w-full">
            <p className="text-lg md:text-xl">{title}</p>
            <p className="text-[15px]">
              {views} views {uploaded}
            </p>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-2 items-center">
            <div className="w-full relative flex gap-2 items-center">
              <div>
                {/* channelProfile */}
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src={channelProfile}
                  alt=""
                />
              </div>
              <div className="leading-5">
                {/* Channel Name */}
                <p className="text-white text-base font-[600]">{channelName}</p>
                <span className="text-neutral-500 text-[13px]">
                  {subscribers} subscribers
                </span>
              </div>

              <button className=" text-black bg-white/90 text-[15px] ml-5 px-3 py-2 rounded-full">
                Subscribe
              </button>
            </div>

            <div className=" w-full flex md:justify-end grow md:grow-0">
              <ul className="flex gap-3 items-center ">
                <ul className="flex items-center px-3 py-2 bg-secondary rounded-full ">
                  <li className="px-1 md:px-2 flex gap-1 items-center text-white cursor-pointer border-r border-white/20">
                    <BiLike className="text-white text-base md:text-xl" />{" "}
                    {likes}
                  </li>
                  <li
                    onClick={() => setdisLike(dislike + 1)}
                    className="px-1 md:px-2 flex gap-1 items-center text-white cursor-pointer"
                  >
                    <BiDislike className="text-white text-base md:text-xl" />{" "}
                    {dislike === 0 ? setdisLike(null) : dislike}
                  </li>
                </ul>

                <li className="flex gap-1 items-center text-white px-3 py-2 bg-secondary rounded-full cursor-pointer">
                  <BiShare
                    style={{ transform: "rotateY(180deg)" }}
                    className="text-white text-base md:text-xl"
                  />
                  Share
                </li>
                <li className="flex gap-1 items-center text-white px-3 py-2 bg-secondary rounded-full cursor-pointer">
                  <HiDownload className="text-white rotate text-base md:text-xl" />
                  Download
                </li>
                <li className="flex gap-1 items-center text-white p-2 bg-secondary rounded-full cursor-pointer">
                  <BsThreeDots className="text-white text-base md:text-xl" />
                </li>
              </ul>
            </div>
          </div>
          {/* Description */}
          <div className="w-full bg-secondary rounded-xl p-4 my-3">
            <p className="w-full text-white text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              mollitia esse, cum distinctio fugit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Perferendis, tenetur? Tempore
              inventore totam aliquid quam ex necessitatibus corporis
              voluptatem, quo, provident voluptatum hic fugit, magni distinctio
              quas iusto quae! Accusamus ratione vitae delectus optio sint
              eveniet doloremque culpa atque voluptates beatae, dolor cumque
              earum, quidem excepturi in ex quasi reiciendis!
              <span className="text-white text-sm"> ...more</span>
            </p>
          </div>

          <div className="w-full">
            <div className="flex gap-10 py-2 text-white">
              <p className="">1 Comments</p>
              <span className="flex items-center gap-1">
                <BiMenuAltLeft className="text-white text-2xl" /> SORT BY
              </span>
            </div>

            <div className="w-full pt-5 pb-16">
              <div className="flex gap-3 items-start ">
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/ogw/AOh-ky3BKT766KKmmlN3p6VF0nI3BjiqPbpiAzvBUu2h=s32-c-mo"
                  alt=""
                />

                <div className="flex-1 relative w-full">
                  <form>
                    <input
                      onClick={() => setActiveInput(true)}
                      className=" w-full bg-transparent text-white border-b border-neutral-500 text-sm focus:outline-none"
                      type="text"
                      name="commentInput"
                      placeholder="Add a comment..."
                      autoComplete="off"
                    />
                    <div
                      className={` ${
                        activeInput ? "flex" : "hidden"
                      } w-full flex p-1 gap-2 justify-end`}
                    >
                      <button
                        type="button"
                        onClick={() => setActiveInput(false)}
                        className="px-3 py-2 text-neutral-500"
                      >
                        CANCEL
                      </button>
                      <button
                        type="submit"
                        className="px-3 py-2 bg-primarylight text-neutral-500"
                      >
                        COMMENT
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* comments */}
              <div className="w-full flex gap-5 flex-col py-5">
                <Comments />
              </div>
            </div>
          </div>
        </div>

        {/* Videos List */}
        <div className="h-full w-full md:w-[30vw] ">
          {/* Categories */}
          <ul className="relative w-full flex items-center gap-3 py-2 bg-primary overflow-x-auto overflow-y-hidden scroll z-30">
            <li className="bg-white rounded-lg px-3 py-1 text-black text-[14px] ">
              All
            </li>
            {categories.map((category) => {
              return (
                <li
                  key={category}
                  className="cursor-pointer rounded-lg px-3 py-1 text-white text-[14px] whitespace-nowrap bg-secondary hover:bg-white/20"
                >
                  {category}
                </li>
              );
            })}
            <span className="sticky -right-5 z-40 bg-primary py-3 px-5">
              <IoIosArrowForward className="text-white hover:bg-secondary rounded-full text-lg" />
            </span>
          </ul>
          <div className="py-1 flex flex-col gap-3 w-full pb-5">
            {videos[0]?.map(
              ({
                id,
                channelId,
                channelName,
                thumbnail,
                length,
                views,
                uploaded,
                title,
              }) => {
                return (
                  <div
                    onClick={() => navigate(`/watch/${channelId}`)}
                    key={id}
                    className="video-items w-full h-full flex gap-3 justify-between items-start grow cursor-pointer"
                  >
                    {/* thumbnail */}
                    <div className="relative w-[300px] h-24 bg-secondary rounded-xl overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={thumbnail}
                        alt=""
                      />
                      <span className="absolute bottom-1 right-1 bg-black/80 text-white text-sm px-1 rounded-[5px]">
                        {length}
                      </span>
                    </div>
                    {/* video details */}
                    <div className="w-full flex justify-between gap-3">
                      {/* video text-content */}
                      <div className="w-full flex flex-col items-start">
                        <p className="text-white text-[15px]">
                          {title.length >= 50
                            ? title.substring(0, 50) + "..."
                            : title}
                        </p>

                        {/* channel name */}
                        <span className="text-white/80 text-[13px]">
                          {channelName}
                        </span>
                        {/* views & timeago */}
                        <span className="text-white/80 flex items-center text-[13px]">
                          {views} views <BsDot /> {uploaded}
                        </span>
                      </div>
                      <span className="video-items-option">
                        <BiDotsVerticalRounded className="text-lg text-white" />
                      </span>
                    </div>
                  </div>
                );
              }
            )}
            {videos[1]?.map(
              ({
                id,
                channelId,
                channelName,
                thumbnail,
                length,
                views,
                uploaded,
                title,
              }) => {
                return (
                  <div
                    onClick={() => navigate(`/watch/${channelId}`)}
                    key={id}
                    className="video-items w-full h-full flex gap-3 justify-between items-start grow cursor-pointer"
                  >
                    {/* thumbnail */}
                    <div className="relative w-[300px] h-24 bg-secondary rounded-xl overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={thumbnail}
                        alt=""
                      />
                      <span className="absolute bottom-1 right-1 bg-black/80 text-white text-sm px-1 rounded-[5px]">
                        {length}
                      </span>
                    </div>
                    {/* video details */}
                    <div className="w-full flex justify-between gap-3">
                      {/* video text-content */}
                      <div className="w-full flex flex-col items-start">
                        <p className="text-white text-[15px]">
                          {title.length >= 50
                            ? title.substring(0, 50) + "..."
                            : title}
                        </p>

                        {/* channel name */}
                        <span className="text-white/80 text-[13px]">
                          {channelName}
                        </span>
                        {/* views & timeago */}
                        <span className="text-white/80 flex items-center text-[13px]">
                          {views} views <BsDot /> {uploaded}
                        </span>
                      </div>
                      <span className="video-items-option">
                        <BiDotsVerticalRounded className="text-lg text-white" />
                      </span>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
