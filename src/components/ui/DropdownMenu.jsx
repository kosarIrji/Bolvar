


// export default DropdownMenu;
import React from "react";
import { FiUser } from "react-icons/fi";
import { GrBlog } from "react-icons/gr";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { LuLandPlot } from "react-icons/lu";
import { RiHome6Line } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaLandmark } from "react-icons/fa";

const DropdownMenu = () => {
  return (
    <ul className="mt-0 z-20 shadow-xl backdrop-blur-sm  bg-black/100 backdrop:blur-2xl bg-opacity-80 shadow-black/20  p-5 rounded-2xl w-full  mx-auto grid grid-cols-2 gap-5 sm:grid-cols-3">
      <a
        href={"https://hominex.ir/about/"}
        className="group relative flex flex-col items-center justify-center
             p-4 rounded-xl bg-gray-500/10 border border-white   hover:bg-gray-500/20 transition-all duration-300 shadow-sm
                      hover:shadow-md"
        onClick={() => setToggleMenu(false)}
      >
        {" "}
        درباره هومینکس
        <AiOutlineInfoCircle className="w-7 h-7 mt-3 opacity-40 transition-opacity duration-200 group-hover:opacity-70" />{" "}
      </a>
      <a
        href={"https://hominex.ir/mahallat/"}
        className="group relative flex flex-col items-center justify-center
             p-4 rounded-xl bg-gray-500/10 border border-white   hover:bg-gray-500/20 transition-all duration-300 shadow-sm
                      hover:shadow-md"
        onClick={() => setToggleMenu(false)}
      >
        معرفی محله
        <LuLandPlot className="w-7 h-7 mt-3 opacity-40 transition-opacity duration-200 group-hover:opacity-70" />
      </a>
      <li
        className="group relative flex flex-col items-center justify-center
             p-4 rounded-xl bg-gray-500/10 border border-white   hover:bg-gray-500/20 transition-all duration-300 shadow-sm
                      hover:shadow-md"
      >
        {" "}
        <a
         >
          <span
            id="badge-dismiss-green"
            className="inline-flex absolute top-[-7px] animate-pulse left-[-15px] z-10  items-center px-2 py-1 me-2 text-[10px] font-medium text-green-800 bg-green-100 rounded-full dark:bg-green-900/50 dark:text-green-300"
          >
            بزودی
          </span>
        </a>
        ویژگی خانه من
        <RiHome6Line className="w-7 h-7 mt-3 opacity-40 transition-opacity duration-200 group-hover:opacity-70" />
      </li>
      <a
        href={"https://hominex.ir/properties/"}
        className="group relative flex flex-col items-center justify-center
        p-4 rounded-xl bg-gray-500/10 border border-white   hover:bg-gray-500/20 transition-all duration-300 shadow-sm
                 hover:shadow-md"
        onClick={() => setToggleMenu(false)}
      >
        بازار املاک
        <MdOutlineRealEstateAgent className="w-7 h-7 mt-3 opacity-40 transition-opacity duration-200 group-hover:opacity-70" />
      </a>
      <a
        href={"https://hominow.ir/consultation"}
        className="group relative flex flex-col items-center justify-center
        p-4 rounded-xl bg-gray-500/10 border border-white   hover:bg-gray-500/20 transition-all duration-300 shadow-sm
                 hover:shadow-md"
        onClick={() => setToggleMenu(false)}
      >
        مشاوره خرید
        <MdOutlineSupportAgent className="w-7 h-7 mt-3 opacity-40 transition-opacity duration-200 group-hover:opacity-70" />
      </a>
      <a
        href={"https://hominex.ir/moshaveran/"}
        className="group relative flex flex-col items-center justify-center
        p-4 rounded-xl bg-gray-500/10 border border-white   hover:bg-gray-500/20 transition-all duration-300 shadow-sm
                 hover:shadow-md"
        onClick={() => setToggleMenu(false)}
      >
        مشاورین املاک
        <FaLandmark className="w-7 h-7 mt-3 opacity-40 transition-opacity duration-200 group-hover:opacity-70" />
      </a>
      <a
        href={"https://hominex.ir/blog/"}
        className="group relative flex flex-col items-center justify-center
             p-4 rounded-xl bg-gray-500/10 border border-white   hover:bg-gray-500/20 transition-all duration-300 shadow-sm
                      hover:shadow-md"
        onClick={() => setToggleMenu(false)}
      >
        هومینکس مگ
        <GrBlog className="w-7 h-7 mt-3 opacity-40 transition-opacity duration-200 group-hover:opacity-70" />
      </a>
      <a
        href={"https://hominex.ir/blog/"}
        className="group relative flex flex-col items-center justify-center
             p-4 rounded-xl bg-gray-500/10 border border-white   hover:bg-gray-500/20 transition-all duration-300 shadow-sm
                      hover:shadow-md"
        onClick={() => setToggleMenu(false)}
      >
        ورود/عضویت
        <FiUser className="w-7 h-7 mt-3 opacity-40 transition-opacity duration-200 group-hover:opacity-70" />
      </a>
    </ul>
  );
};

export default DropdownMenu;
