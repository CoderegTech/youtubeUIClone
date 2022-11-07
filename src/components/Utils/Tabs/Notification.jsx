import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

function Notification() {
  const list = [
    {
      id: 1,
      channelProfile:
        "https://yt3.ggpht.com/ytc/AMLnZu9UWrGceKWaqm8AF89vuxrEt8MO3E59qOoQ785Lew=s88-c-k-c0x00ffffff-no-rj",
      channelName: "freeCodeCamp.org",
      thumbnail: "http://unsplash.it/150/100?gravity=center",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, totam!",
      uploaded: "34 minutes ago",
    },
    {
      id: 2,
      channelProfile:
        "https://yt3.ggpht.com/ytc/AMLnZu-hi-TxVHQwPnZh3h9-F0OAQyqoETBJQWXjDzILGg=s88-c-k-c0x00ffffff-no-rj",
      channelName: "Dave Gray",
      thumbnail: "http://unsplash.it/150/100?gravity=center",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, totam!",
      uploaded: "23 minutes ago",
    },
    {
      id: 3,
      channelProfile:
        "https://yt3.ggpht.com/ZeokXdjeXW_6CpcChqvVBEBcHoJ9TAaLTnQj8yT942LLV8afhmUv6zLtqzbNS1uPnernj3SPshA=s88-c-k-c0x00ffffff-no-rj",
      channelName: "David Bombal",
      thumbnail: "http://unsplash.it/150/100?gravity=center",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, totam!",
      uploaded: "1 hour ago",
    },
    {
      id: 4,
      channelProfile:
        "https://yt3.ggpht.com/ytc/AMLnZu9UWrGceKWaqm8AF89vuxrEt8MO3E59qOoQ785Lew=s88-c-k-c0x00ffffff-no-rj",
      channelName: "freeCodeCamp.org",
      thumbnail: "http://unsplash.it/150/100?gravity=center",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, totam!",
      uploaded: "46 minutes ago",
    },
    {
      id: 5,
      channelProfile:
        "https://yt3.ggpht.com/ytc/AMLnZu9UWrGceKWaqm8AF89vuxrEt8MO3E59qOoQ785Lew=s88-c-k-c0x00ffffff-no-rj",
      channelName: "freeCodeCamp.org",
      thumbnail: "http://unsplash.it/150/100?gravity=center",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, totam!",
      uploaded: "53 minutes ago",
    },
    {
      id: 6,
      channelProfile:
        "https://yt3.ggpht.com/ytc/AMLnZu9UWrGceKWaqm8AF89vuxrEt8MO3E59qOoQ785Lew=s88-c-k-c0x00ffffff-no-rj",
      channelName: "freeCodeCamp.org",
      thumbnail: "http://unsplash.it/150/100?gravity=center",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, totam!",
      uploaded: "2 days ago",
    },
    {
      id: 7,
      channelProfile:
        "https://yt3.ggpht.com/ytc/AMLnZu9UWrGceKWaqm8AF89vuxrEt8MO3E59qOoQ785Lew=s88-c-k-c0x00ffffff-no-rj",
      channelName: "freeCodeCamp.org",
      thumbnail: "http://unsplash.it/150/100?gravity=center",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, totam!",
      uploaded: "3 days ago",
    },
    {
      id: 8,
      channelProfile:
        "https://yt3.ggpht.com/ytc/AMLnZu9UWrGceKWaqm8AF89vuxrEt8MO3E59qOoQ785Lew=s88-c-k-c0x00ffffff-no-rj",
      channelName: "freeCodeCamp.org",
      thumbnail: "http://unsplash.it/150/100?gravity=center",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, totam!",
      uploaded: "4 days ago",
    },
  ];

  return (
    <div
      className="notification-tab
    absolute top-16 md:top-2 right-0 md:right-[120px] rounded-xl bg-secondary overflow-hidden z-50 cursor-pointer"
    >
      <header className="flex w-full justify-between items-center border-b border-white/20 px-4 py-3">
        <h1 className="text-white text-base">Notifications</h1>
        <div>
          <FiSettings className="text-white text-xl" />
        </div>
      </header>
      <ul className=" w-full h-full overflow-y-auto pb-12 scroll">
        {list.map(
          ({ id, channelProfile, channelName, thumbnail, text, uploaded }) => (
            <li
              key={id}
              className="notification-tab-list hover:bg-white/10 relative flex justify-between w-full p-3"
            >
              <div className="pr-3">
                {/* youtube channel profile */}
                <img
                  className=" w-10 h-10 rounded-full object-cover shrink-0"
                  src={channelProfile}
                  alt=""
                />
              </div>
              <div className="flex-1 pr-2">
                {/* Channel Title */}
                <p className="text-white text-sm md:text-base">
                  {channelName} uploaded: {text.substring(0, 50)}
                </p>
                <span className="text-[12px] text-white/50">{uploaded}</span>
              </div>
              <div className="pl-3 pr-8">
                {/* channel thumbnail */}
                <img
                  className="hidden md:block w-20 h-14 bg-white rounded-none md:rounded-md shrink-0 object-cover"
                  src={thumbnail}
                  alt=""
                />
              </div>
              <span className="notif-option opacity-0">
                <BiDotsVerticalRounded className="text-xl text-white" />
              </span>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default Notification;
