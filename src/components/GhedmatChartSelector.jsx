// فایل GhedmatChart.jsx

import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

const COLORS = [
  "#E76F51",
  "#EE8959",
  "#F4A261",
  "#E9C46A",
  "#2A9D8F",
  "#287271",
  "#264653",
];

export default function GhedmatChartSelector({chartType}) {
  const [data, setData] = useState([]);
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadExcel = async () => {
      try {
        const response = await fetch("./data/QEDMAT.xlsx"); // مسیر فایل قدمت
        if (!response.ok) throw new Error("خطا در دریافت فایل");

        const blob = await response.blob();
        const arrayBuffer = await blob.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: "array" });

        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        const chartData = jsonData
          .map((row) => ({
            name: row["نوع"]?.toString().trim() || "نامشخص",
            تعداد: Number(row["تعداد"]) || 0,
          }))
          .filter((item) => !isNaN(item.تعداد));

        setData(chartData);
        setLoading(false);
      } catch (err) {
        console.error("خطا:", err);
        setLoading(false);
      }
    };

    loadExcel();
  }, []);

  const renderChart = () => {
    if (data.length === 0)
      return (
        <div className="no-data-message">داده‌ای برای نمایش وجود ندارد</div>
      );

    switch (chartType) {
      case "bar":
        return (
          <BarChart
            data={data}
            margin={{ top: 20, right: 40, left: 20, bottom: 70 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              angle={-45}
              textAnchor="start"
              interval={0}
              height={60}
            />
            <YAxis width={10} tick={{ textAnchor: "satrt", fontSize: 13 }} />
            <Tooltip
              contentStyle={{
                fontFamily: "Modam",
                direction: "rtl",
                textAlign: "right",
              }}
              formatter={(value) => [`${value} واحد`, "تعداد"]}
            />
            <Legend wrapperStyle={{ direction: "rtl", padding: "20px" }} />
            <Bar
              dataKey="تعداد"
              name="تعداد ساختمان‌ها"
              barSize={25}
              radius={[4, 4, 0, 0]}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        );
      case "line":
        return (
          <LineChart
            data={data}
            margin={{ top: 20, right: 20, left: 20, bottom: 70 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              angle={-45}
              textAnchor="start"
              interval={0}
              height={60}
            />
            <YAxis width={10} tick={{ textAnchor: "satrt", fontSize: 13 }} />
            <Tooltip
              contentStyle={{
                fontFamily: "Modam",
                direction: "rtl",
                textAlign: "right",
              }}
              formatter={(value) => [`${value} واحد`, "تعداد"]}
            />
            <Legend wrapperStyle={{ direction: "rtl" }} />
            <Line
              type="monotone"
              dataKey="تعداد"
              name="تعداد ساختمان‌ها"
              stroke="#8F5100"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        );
      case "pie":
        return (
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="تعداد"
              nameKey="name"
              label // حذف برچسب‌های داخل دایره
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                fontFamily: "Modam",
                direction: "rtl",
                textAlign: "right",
              }}
              formatter={(value) => `${value} واحد`}
            />
            <Legend wrapperStyle={{ direction: "rtl" }} />
          </PieChart>
        );
      default:
        return null;
    }
  };

  return (
    <div className="chart-containe  w-full ">
      <div className="chart-header ">
       
        <h2 className="chart-title text-[#8F5100] mr-40" >نمودار قدمت ساختمان‌ها</h2>
      </div>

      {loading ? (
        <div className="loading-message">در حال بارگذاری داده‌ها...</div>
      ) : (
        <ResponsiveContainer width="100%" height={500}>
          {renderChart()}
        </ResponsiveContainer>
      )}
      <style jsx>{`
        .chart-container {
          font-family: "Modam", Tahoma, sans-serif;
          direction: rtl;
          background-color: [#FFF6EB];
        }

        .chart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          gap: 15px;
     
        }

        .chart-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #8F5100;
          margin-right: 1rem;
        }

       

      

        .chart-type-select:focus {
          outline: none;
          border-color: #2f3e3b;
          box-shadow: 0 0 0 2px rgba(78, 121, 167, 0.3);
        }

        .loading-message,
        .no-data-message {
          text-align: center;
          padding: 40px;
          color: #666;
          font-size: 16px;
        }

        .chart-wrapper {
          margin-top: 20px;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
