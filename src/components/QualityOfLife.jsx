/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import QualityOfLifeChart from "./QualityOfLifeChart";

export default function QualityOfLife() {
  const data = [
    [93, 91, 96, 98, 90], //میرزاکوچکخان
    [93, 93, 96, 96, 91], //bsij
    [88, 86, 100, 94, 88], //bolvar
    [100,100,80,97,84],//dochenar
    [96,93,95,91,98],//jomhori
    [82,81,88,89,79]//mosala
  ];
  
//     "سرزندگی اجتماعی",
//     "دسترسی به خدمات شهری",
//     "فضای سبز و آرامش",
//     "امنیت",
//     "کیفیت کالبدی محله",

  const names = ["میرزاکوچکخان", "بسیج", "بلوار","دوچنار","جمهوری","مصلی"];
  return (
    <section className="">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        {/* Box for text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative  bg-[#FFF6EB] rounded-3xl shadow-lg px-6 py-12 border border-gray-200 col-span-2 md:col-span-1 text-gray-700 h-[100%]"
        >
          <h3 className="sm:text-xlg font-extrabold w-full   text-3xl  font-modam  text-center  sm:text-2xl md:text-lg text-[#8F5100] mb-4 leading-snug  ">
            کیفیت زندگی محله بلوار
          </h3>
          <p className="text-gray-700 leading-relaxed  text-sm sm:text-xs md:text-base w-full text-justify md:leading-loose">
            محله‌ی بلوار با توجه به بررسی های انجام شده در پنج معیار اصلی کیفیت
            زندگی در وضعیت مطلوبی قرار دارد؛ حضور کاربری های فعال و امنیت بالا،
            امکانات خدماتی و روابط همسایگی قوی که زمینه‌ساز سرزندگی اجتماعی است،
            این محله را به یکی از محلات مناسب شهری برای زندگی تبدیل کرده است.
            <br />
            🔐 امنیت: روشنایی معابر، کاربری های فعال در ساعات مختلف شبانه روز
            سرزندگی اجتماعی
            <br />
            🎉 سرزندگی اجتماعی: روابط همسایگی مطلوب، تعامل مناسب، سکونت پذیری
            بالا
            <br />
            🚍 دسترسی به خدمات: نزدیکی به خیابان های اصلی، دسترسی به مراکز
            آموزشی، کاربری های تجاری متنوع <br />
            🏘️ کیفیت کالبدی: نوسازی بافت قدیمی، ترافیک کم، تراکم ساختمانی پایین،
            معابر باریک و کم عرض
            <br />
            🌱 فضای سبز و آسایش: تراکم سبز مناسب و وجود پارک بلوار و پارک میرزا
            در بافت محله، نورگیری مناسب ساختمان ها، آآلودگی صوتی پایین در بافت
            مرکزی محله
          </p>
        </motion.div>

        {/* Box for chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-2 md:col-span-1  h-full"
        >
          <QualityOfLifeChart dataValues={data} names={names} />
        </motion.div>
      </div>
    </section>
  );
}
