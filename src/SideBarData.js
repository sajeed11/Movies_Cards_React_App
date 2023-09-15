import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SortIcon from "@mui/icons-material/Sort";
import ExploreIcon from "@mui/icons-material/Explore";
import MovieIcon from "@mui/icons-material/Movie";
import AnimationIcon from "@mui/icons-material/Animation";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

export const SideBarData = [
  {
    title: "Movie Land",
    icon: <HomeIcon />,
    link: "/home",
    toggle: "no",
  },
  {
    title: "Sort By",
    icon: <SortIcon />,
    link: "/Sort",
    toggle: "yes",
    childrens: [
      {
        title: "Anime",
        icon: <AnimationIcon />,
      },
      {
        title: "Movie",
        icon: <MovieIcon />,
      },
    ],
  },
  {
    title: "Explore",
    icon: <ExploreIcon />,
    link: "/explore",
    toggle: "no",
  },
  {
    title: "Contact Us",
    icon: <ContactSupportIcon />,
    link: "/contact",
    toggle: "no",
  },
];
