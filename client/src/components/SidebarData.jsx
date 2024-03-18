
import React from "react";
import * as AiIcons from "react-icons/ai";
// import * as FaIcons from "react-icons/fa";
// import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: " Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
   },
   {
    title: "Squads",
    path: "/squads",
    // icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
   },
   {
    title: "New Squad",
    path: "/create",
    cName: "nav-text",
    },
    {
    title: "Login",
    path: "/login",
    //  icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
    },

];
