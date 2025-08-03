import FunctionalPieChart from "./charts/FunctionalPieChart";
import MapFunctionalAnalysis from "./MapFunctionalAnalysis";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import Details from "../components/config/details.json";

export default function FunctionalAnalysis() {
  return (
    <motion.div
      className="grid w-full lg-grid-cols-3 mt-3  lg:mb-5 gap-3"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* ستون 1: متن و نمودار */}
      <div className="lg:col-span-2 col-span-3  border bg-white/40 backdrop-blur-md  rounded-2xl shadow-sm p-5   text-xl w-full">
        <h3 className="text-3xl sm:text-2xl   w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2  font-modam font-extrabold   text-[var(--text)] mb-4 leading-snug ">
          آرامش در دل تنوع؛ ترکیب دل‌نشین زندگی شهری در {Details.alley.name}
<span>
  <Layers size={28} />
  </span>
        </h3>
        <p className="md:leading-loose  whitespace-pre-line lg:leading-loose font-modam  text-justify text-base  ">
          وقتی وارد محله بلوار می‌شوید، اولین چیزی که به چشم می‌آید،{" "}
          <strong className="text-blue-700">آرامش مرکز </strong> است؛ جایی که خانه‌های مسکونی در بافتی
         آرام و بی سروصدا ، فضایی مطمئن و مناسب برای زندگی ایجاد کرده‌اند.{" "}
          <br /> در قلب این بافت،
          <strong className="text-green-700">پارک‌ بلوار </strong> نه‌تنها به فضای سبز محله جان داده، بلکه
          در اطراف خود میزبان <strong className="text-red-700">کافه‌ها و رستوران‌هایی </strong>ست که به
          محله حال‌و‌هوایی زنده و دل‌نشین بخشیده‌اند. این ترکیب، بلوار را به
          محله‌ای تبدیل کرده که هم برای <strong className="text-yellow-800">زندگی خانوادگی  </strong>{" "}
          مناسب است، و هم برای لحظات <strong className="text-purple-800">اجتماعی و تفریحی</strong>. <br />
          در حاشیه خیابان امام خمینی،<strong className="text-gray-700">
            {" "}
            راسته نمایشگاه‌های خودرو
          </strong>{" "}
          چهره‌ای نیمه‌تجاری به محله داده‌اند؛ این کاربری‌ها در کنار پمپ‌ بنزین،
          آموزشگاه‌ها، مراکز اداری و پارک دوم در بخش مرکزی، ترکیب عملکردی
          متعادلی را برای ساکنان فراهم کرده‌اند.
        </p>
        {/* باکس ۳: نکته کلیدی */}
        <div className="bg-white/40  border-r-4 border-blue-500 shadow-md p-1 mt-3">
          <h4 className="flex gap-2 text-blue-600">
            {/* <FaLightbulb size={22} className="text-blue-600" /> */}
            <span className="font-bold text-base">🔍 نکته مهم:</span>
          </h4>
          <p className="font-modam text-[15px] leading-loose text-gray-800  ">
            برخلاف بسیاری از محله‌ها که یا کاملاً مسکونی‌اند یا تجاری، بلوار با
            ترکیبی از <strong>کاربری‌های فرا‌محله‌ای و محلی</strong>، تعادلی کمیاب و جذاب ایجاد
            کرده است.
          </p>
        </div>
        </div>
        <div className="col-span-3 lg:col-span-1 border bg-white/40 backdrop-blur-md  rounded-2xl shadow-sm pl-5 pr-5 pt-5   text-xl w-full">
          <FunctionalPieChart />
        </div>
      

      {/* ستون 2 و 3: نقشه */}
      <motion.div
        className="col-span-3 shadow-md rounded-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <MapFunctionalAnalysis />
      </motion.div>
    </motion.div>
  );
}
