import React from "react";
import Home from "../assets/svgs/home.svg";
import Search from "../assets/svgs/search.svg";
import Add from "../assets/svgs/add.svg";
import Arrow from "../assets/svgs/arrow.svg";
import Recent from "../assets/svgs/recent.svg";
import List from "./List";
import { Link } from "react-router-dom";
const Sidenav = () => {
  return (
    <div className="transition">
      <div className="bg-[#121212] w-full rounded-md m-2 cursor-pointer">
        <div className="flex flex-col h-full p-5 items-start gap-4 w-full">
          <Link to={'/'} className="flex items-center gap-6 font-bold text-[#e6e6e6d3] hover:text-white active:text-white">  
            <img src={Home} alt="img" className="w-[30px]" />
            Home
          </Link>
          <Link to={'/search'} className=" flex items-center gap-6 font-bold text-[#e6e6e6d3] hover:text-white ">
            <img src={Search} alt="img" className="w-[30px]" />
            Search
          </Link>
        </div>
      </div>

      <div className="bg-[#121212] w-full rounded-md m-2 cursor-pointer">
        <div className="flex flex-col h-full p-5 items-start gap-4">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-6 font-bold fill-[#e6e6e6d3] text-[#e6e6e6d3] hover:fill-white hover:text-white ">
              <svg
                role="img"
                height="24"
                width="24"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-encore-id="icon"
                class="Svg-sc-ytk21e-0 haNxPq"
              >
                <path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1z"></path>
              </svg>
              Your Library
            </div>
            <div className="flex items-center gap-6 font-bold text-[#e6e6e6d3]">
              <div className="rounded-full hover:bg-[#57565634] p-1">
                <img src={Add} alt="img" className="w-[20px] h-[20px] " />
              </div>
              <div className="rounded-full hover:bg-[#57565634] p-1">
                <img src={Arrow} alt="img" className="w-[20px]" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 font-medium">
            <span className="px-4 py-1 rounded-full text-[14px]  bg-[#57565634] text-gray-100">
              Playlists
            </span>
            <span className="px-5 py-[0.35rem] rounded-full text-[14px]  bg-[#57565634] text-gray-100">
              Artist
            </span>
          </div>
          <div className="flex items-center justify-between w-full gap-6 font-bold text-white ">
            <div className="hover:bg-[#57565634] rounded-full p-[0.29rem]">
              <img
                src={Search}
                alt="img"
                className="w-[25px] hover:text-white "
              />
            </div>

            <div className=" hover:animate-pulse transition-transform flex items-center gap-2">
              <p className=" font-bold text-[#E6E6E6] text-[14px] ">Recents</p>
              <img src={Recent} alt="img" className="w-[20px]" />
            </div>
          </div>
        <List />
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
