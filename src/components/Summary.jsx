import SummaryChart from "./charts/SummryChart";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function Summary() {
  return (
    <section className="relative my-3 border pt-3 h-full bg-white/50 backdrop-blur-sm  rounded-2xl shadow-lg   sm:p-2 ">
     
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="col-span-2 md:col-span-1"
      >
        <SummaryChart />
      </motion.div>
    </section>
  );
}
