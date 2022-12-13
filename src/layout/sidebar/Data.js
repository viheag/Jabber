import {
    HomeIcon,
    LayoutIcon,
    CalendarIcon
  } from "../../assets/Icons.js";
  
  export const SIDEBAR_DATA = [
    {
      id: 1,
      name: "Profile",
      path: "profile",
      icon: <HomeIcon />,
    },
    {
      id: 2,
      name: "Friends",
      path: "my-friends",
      icon: <LayoutIcon />,
    },
    {
      id: 3,
      name: "Memories",
      path: "memories",
      icon: <CalendarIcon />,
    }
  ];