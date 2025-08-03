/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import AccsessesArzeMabar from "../components/charts/AccessesArzeMabar";
import AccsessesKyfiatMabar from "../components/charts/AccsessesKyfiatMabar";
import MapStreet from "./MapStreet";
import { Map } from "lucide-react";
import { Button } from "../components/ui/Button";
import Details from "../components/config/details.json";
import { useState } from "react";

export default function Accesses() {
  const [selectedComponent, setSelectedComponent] = useState("key");

  return (
    <section className="w-full mt-3">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
        {/* باکس توضیحات */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className=" rounded-2xl shadow-sm p-5 border lg:col-span-3 bg-white/50 backdrop-blur-md "
        >
          <h3 className="text-3xl    w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2  font-modam font-extrabold   text-[var(--text)] mb-4 leading-snug">
            دسترسی مطلوب، سکوت درون‌محله‌ای؛ ترکیب هوشمند در{" "}
            {Details.alley.name} <span>
              <Map size={28} />
              </span> 
          </h3>
          <p className="md:leading-loose lg:leading-loose font-modam  text-justify text-base  ">
            محله بلوار در حاشیه شرقی شهر قرار گرفته؛ اما به‌واسطه‌ی اتصال به
            <strong> خیابان‌هایی  مثل امام خمینی و طالقانی </strong> ، از{" "}
            <strong>دسترسی سریع به مرکز شهر و ورودی‌  بجنورد</strong>{" "}
            برخوردار است. این موضوع برای ساکنان، به‌ویژه آن‌هایی که محل کار یا
            تحصیل‌شان خارج از محله است، یک امتیاز بزرگ به حساب می‌آید. <br />
          </p>
          <div className=" bg-white/40  border-r-4 border-orange-800 shadow-md mb-1 p-2 ">
            <span className="text-orange-800">ویژگی منحصربه‌فرد بلوار:</span> در
            عین دسترسی مناسب، فضای داخلی محله آرام و کم‌ترافیک باقی مانده است.
          </div>
          <p className="md:leading-loose lg:leading-loose font-modam  text-justify text-base  ">

            {" "}
            بیشتر ترددها در محله از طریق
            <strong> خیابان‌های استقلال، ابوریحان و امام خمینی</strong> انجام
            می‌شود. اما در قلب محله،{" "}
            <strong>معابر فرعی با حجم ترافیکی پایین</strong>، محیطی کم‌تنش،{" "}
            <strong>فاقد آلودگی صوتی</strong>، و مناسب برای زندگی خانوادگی فراهم
            کرده‌اند.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" rounded-2xl shadow-sm p-5 border lg:col-span-2 lg:leading-loose bg-white/50 backdrop-blur-md "
        >
          <div className="flex flex-wrap justify-center gap-3 mb-2">
            {[
              { label: "عرض معبر", value: "arze" },
              { label: "کیفیت معبر", value: "key" },
            ].map((btn) => (
              <Button
                key={btn.value}
                onClick={() => setSelectedComponent(btn.value)}
                variant={
                  selectedComponent === btn.value ? "default" : "outline"
                }
                className="w-28 text-sm"
              >
                {btn.label}
              </Button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {selectedComponent === "arze" && (
              <motion.div
                key="arze"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <AccsessesArzeMabar />
              </motion.div>
            )}

            {selectedComponent === "key" && (
              <motion.div
                key="key"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <AccsessesKyfiatMabar />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* نقشه - کل عرض پایین */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 rounded-xl shadow-sm min-h-[600px] lg:h-full"
        >
          <MapStreet />
        </motion.div>
      </div>
    </section>
  );
}
