import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectedAllVideos } from "../redux/videos/videosSlice";
import Header from "../Utils/Header";
import NavigationBar from "../Utils/NavigationBar";
import Shorts from "../Utils/Shorts";
import SideBar from "../Utils/SideBar";
import SideMenu from "../Utils/SideMenu";

const Home = () => {
  const videos = useSelector(selectedAllVideos);

  const [activeSideBar, setActiveSideBar] = useState(false);
  const [disActiveShortComponent, setDisActiveShortComponent] = useState(false);

  const navigate = useNavigate();

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
  return (
    <>
      <div className="relative w-screen h-screen bg-primary overflow-hidden">
        {/* For Mobile View */}
        <NavigationBar />
        {/* Header */}
        <Header toggleSideMenu={() => setActiveSideBar(!activeSideBar)} />

        <div className="relative top-16 w-screen h-full flex justify-center ">
          {/* Side Menu */}
          {/* toggle side menu */}
          {activeSideBar ? <SideBar /> : <SideMenu />}

          {/* Dashboard Section */}
          <div className="grow dashboard px-2 md:px-4 overflow-y-auto scroll ">
            {/* Categories */}
            <ul className="w-full sticky top-0 flex items-center gap-3  bg-primary p-3 overflow-x-auto scroll z-30">
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
              <span className="fixed top-16 right-3 md:right-0 py-2 px-5 bg-primary">
                <IoIosArrowForward className="w-full h-full text-white hover:bg-secondary rounded-full text-lg p-2" />
              </span>
            </ul>
            {/* Videos container */}
            <div className="w-full h-full ">
              {/* Videos */}
              <div className="w-full p-3 flex flex-wrap gap-5 ">
                {/* ==========================> */}
                {videos[0]?.map(
                  ({
                    id,
                    channelId,
                    channelProfile,
                    channelName,
                    thumbnail,
                    length,
                    views,
                    uploaded,
                    title,
                  }) => {
                    return (
                      <>
                        {/* video items */}
                        <div
                          onClick={() => navigate(`/watch/${channelId}`)}
                          key={id}
                          className="video-items w-[250px] grow lg:max-w-[300px]  cursor-pointer"
                        >
                          {/* thumbnail */}
                          <div className="relative w-full max-h-48 bg-secondary rounded-xl overflow-hidden shrink-0">
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
                          <div className="w-full py-3 flex justify-between gap-3">
                            {/* channel profile */}
                            <img
                              className="w-9 h-9 rounded-full object-cover bg-secondary"
                              src={channelProfile}
                              alt=""
                            />
                            {/* video text-content */}
                            <div className="w-full flex flex-col items-start">
                              <p className="text-white text-[15px]">
                                {title.length >= 40
                                  ? title.substring(0, 40) + "..."
                                  : title}
                              </p>

                              {/* channel name */}
                              <span className="text-white/50 text-[13px] pt-1">
                                {channelName}
                              </span>
                              {/* views & timeago */}
                              <span className="text-white/50 text-[13px] flex items-center">
                                {views} views <BsDot /> {uploaded}
                              </span>
                            </div>
                            <span className="video-items-option">
                              <BiDotsVerticalRounded className="text-lg text-white" />
                            </span>
                          </div>
                        </div>
                      </>
                    );
                  }
                )}
              </div>
              {/* Stories */}
              {!disActiveShortComponent ? (
                <Shorts disActive={() => setDisActiveShortComponent(true)} />
              ) : null}
              <div className="w-full p-3 flex flex-wrap gap-5 ">
                {/* ==========================> */}
                {videos[1]?.map(
                  ({
                    id,
                    channelId,
                    channelProfile,
                    channelName,
                    thumbnail,
                    length,
                    views,
                    uploaded,
                    title,
                  }) => {
                    return (
                      <>
                        {/* video items */}
                        <div
                          onClick={() => navigate(`/watch/${channelId}`)}
                          key={id}
                          className="video-items w-[250px] grow lg:max-w-[300px]  cursor-pointer"
                        >
                          {/* thumbnail */}
                          <div className="relative w-full max-h-48 bg-secondary rounded-xl overflow-hidden shrink-0">
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
                          <div className="w-full py-3 flex justify-between gap-3">
                            {/* channel profile */}
                            <img
                              className="w-9 h-9 rounded-full object-cover bg-secondary"
                              src={channelProfile}
                              alt=""
                            />
                            {/* video text-content */}
                            <div className="w-full flex flex-col items-start">
                              <p className="text-white text-[15px]">
                                {title.length >= 40
                                  ? title.substring(0, 40) + "..."
                                  : title}
                              </p>

                              {/* channel name */}
                              <span className="text-white/50 text-[13px] pt-1">
                                {channelName}
                              </span>
                              {/* views & timeago */}
                              <span className="text-white/50 text-[13px] flex items-center">
                                {views} views <BsDot /> {uploaded}
                              </span>
                            </div>

                            <span className="video-items-option">
                              <BiDotsVerticalRounded className="text-lg text-white" />
                            </span>
                          </div>
                        </div>
                      </>
                    );
                  }
                )}
              </div>
              {/* ==========================> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
