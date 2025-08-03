import React from "react";
import { TrendingUp } from "lucide-react";
import Details from "../components/config/details.json";

export default function Priorities() {
  return (
    // main component
    <div className="flex flex-col overflow-hidden w-full items-center justify-center pt-3 my-3 border bg-white/50 backdrop-blur-md shadow-md p-4 py-5 rounded-2xl">
      <h3 className="text-3xl sm:text-2xl   w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2 mt-2 font-modam font-extrabold   text-[var(--text)] mb-4 leading-snug ">
        اولویت های سرمایه گذاری محله {Details.alley.name}
        <TrendingUp size={28} />
      </h3>
      {/* itmes container */}
      <div className="w-full   flex flex-col lg:flex-row gap-[10px] justify-evenly xl:justify-center items-center">
        {/* Box 1 */}
        <div className="rounded-xl shadow p-4 flex flex-col items-center justify-between w-full max-w-xs md:h-[200px] h-[150px]   bg-gradient-to-t  from-yellow-100  to-yellow-200 ">
          <h2 className="text-lg   font-bold mb-2 text-gray-800">
            {Details.priorities[0].title}:
          </h2>
         
          <p className="text-gray-600 text-center md:mt-5  text-base">
            {Details.priorities[0].context}
          </p>
        </div>
        {/* Box 2 */}
        <div  className="rounded-xl shadow p-4 flex flex-col   items-center justify-between w-full max-w-xs md:h-[200px] h-[150px]    bg-gradient-to-t from-orange-900 via-orange-800 to-orange-700">
          <h2 className="text-lg  font-bold mb-2 text-white">
            {" "}
            {Details.priorities[1].title}:
          </h2>
          <p className="text-white text-center md:mt-5  text-base">
            {Details.priorities[1].context}
          </p>
        </div>
        {/* Box 3 */}
        <div className="rounded-xl shadow p-4 flex flex-col items-center justify-between w-full max-w-xs md:h-[200px] h-[150px]   bg-gradient-to-t from-orange-50  to-orange-100">
          <h2 className="text-lg  font-bold mb-2 text-gray-900">
            {Details.priorities[2].title}:{" "}
          </h2>
          <p className="text-gray-800 text-center md:mt-5  text-base">
            {Details.priorities[2].context}{" "}
          </p>
        </div>
        {/* Box 4 */}
        <div className="rounded-xl shadow p-4 flex flex-col items-center justify-between w-full max-w-xs md:h-[200px] h-[150px]   bg-gradient-to-t from-orange-500 via-orange-600 to-orange-700">
          <h2 className="text-lg  font-bold mb-2 text-gray-900">
            {Details.priorities[3].title}:{" "}
          </h2>
          <p className="text-gray-800 text-center md:mt-5  text-base">
            {Details.priorities[3].context}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
