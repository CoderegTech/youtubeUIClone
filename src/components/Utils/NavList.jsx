import {
  AiOutlineFlag,
  AiOutlineLike,
  AiOutlinePlaySquare,
} from "react-icons/ai";
import { BsClock, BsTrophy } from "react-icons/bs";
import { CgMusicNote } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { GiFilmStrip, GiHanger } from "react-icons/gi";
import { GrHistory } from "react-icons/gr";
import { ImNewspaper } from "react-icons/im";
import { IoMdHelpCircleOutline } from "react-icons/io";
import {
  MdLocalFireDepartment,
  MdOutlineSubscriptions,
  MdVideoLibrary,
} from "react-icons/md";
import { RiCompass3Line, RiFeedbackLine } from "react-icons/ri";
import { SiYoutubegaming } from "react-icons/si";
const Navlist = [
  [
    {
      id: 1,
      icon: <RiCompass3Line />,
      title: "Shorts",
      link: "",
    },
    {
      id: 2,
      icon: <MdOutlineSubscriptions />,
      title: "Subscriptions",
      link: "",
    },
  ],
  [
    {
      id: 1,
      icon: <MdVideoLibrary />,
      title: "Library",
      link: "",
    },
    {
      id: 2,
      icon: <GrHistory />,
      title: "History",
      link: "",
    },
    {
      id: 3,
      icon: <AiOutlinePlaySquare />,
      title: "Your videos",
      link: "",
    },
    {
      id: 4,
      icon: <BsClock />,
      title: "Watch Later",
      link: "",
    },
    {
      id: 5,
      icon: <AiOutlineLike />,
      title: "Liked videos",
      link: "",
    },
  ],
  // SUBSCRIPTIONS
  [
    {
      id: 1,
      profileUrl:
        "https://yt3.ggpht.com/ytc/AMLnZu9UWrGceKWaqm8AF89vuxrEt8MO3E59qOoQ785Lew=s176-c-k-c0x00ffffff-no-rj-mo",
      channel: "Freecodecamp",
      link: "",
    },
    {
      id: 2,
      profileUrl:
        "https://yt3.ggpht.com/tLOaVyDRQq46qga99PFlP9b3PRcni8gBJepNOecsgIdADpxU10p6w0VD-fZ8VvtqeldN6IHYOj0=s176-c-k-c0x00ffffff-no-rj-mo",
      channel: "PedroTech",
      link: "",
    },
    {
      id: 3,
      profileUrl:
        "https://yt3.ggpht.com/ytc/AMLnZu_vx2QaoABpOD1MFk3nvLibUr8EDUv_Z_xyvOAk6A=s176-c-k-c0x00ffffff-no-rj-mo",
      channel: "The Net Ninja",
      link: "",
    },
    {
      id: 4,
      profileUrl:
        "https://yt3.ggpht.com/ytc/AMLnZu80d66aj0mK3KEyMfpdGFyrVWdV5tfezE17IwRkhw=s68-c-k-c0x00ffffff-no-rj",
      channel: "Fireship",
      link: "",
    },
    {
      id: 5,
      profileUrl:
        "https://yt3.ggpht.com/ytc/AMLnZu-hi-TxVHQwPnZh3h9-F0OAQyqoETBJQWXjDzILGg=s88-c-k-c0x00ffffff-no-rj",
      channel: "Dave Gray",
      link: "",
    },
    {
      id: 6,
      profileUrl:
        "https://yt3.ggpht.com/ytc/AMLnZu9nSdhYbPUgxIavX6vicAOFioLHhkuCNeHcp-Icpw=s88-c-k-c0x00ffffff-no-rj",
      channel: "HackerSploit",
      link: "",
    },
    {
      id: 7,
      profileUrl:
        "https://yt3.ggpht.com/ZeokXdjeXW_6CpcChqvVBEBcHoJ9TAaLTnQj8yT942LLV8afhmUv6zLtqzbNS1uPnernj3SPshA=s176-c-k-c0x00ffffff-no-rj-mo",
      channel: "David Bombal",
      link: "",
    },
  ],
  // Explore
  [
    {
      id: 1,
      icon: <MdLocalFireDepartment />,
      title: "Trending",
      link: "",
    },
    {
      id: 2,
      icon: <CgMusicNote />,
      title: "Music",
      link: "",
    },
    {
      id: 3,
      icon: <GiFilmStrip />,
      title: "Films",
      link: "",
    },
    {
      id: 4,
      icon: <SiYoutubegaming />,
      title: "Gaming",
      link: "",
    },
    {
      id: 5,
      icon: <ImNewspaper />,
      title: "News",
      link: "",
    },
    {
      id: 6,
      icon: <BsTrophy />,
      title: "Sport",
      link: "",
    },
    {
      id: 7,
      icon: <GiHanger />,
      title: "Fashion & beauty",
      link: "",
    },
  ],
  [
    {
      id: 1,
      icon: <FiSettings />,
      title: "Settings",
      link: "",
    },
    {
      id: 2,
      icon: <AiOutlineFlag />,
      title: "Report history",
      link: "",
    },
    {
      id: 3,
      icon: <IoMdHelpCircleOutline />,
      title: "Help",
      link: "",
    },
    {
      id: 4,
      icon: <RiFeedbackLine />,
      title: "Send feedback",
      link: "",
    },
  ],
];

export default Navlist;
