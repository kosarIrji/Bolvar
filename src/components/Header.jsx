"use client";
import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { TbMenu4, TbMenu3 } from "react-icons/tb";
import DropdownMenu from "../components/ui/DropdownMenu";
import { routes } from "../config/routes";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };

  const handleFeatureClick = () => {
    toast.info("پروژه در دست توسعه، بعدا تلاش کنید.", {
      position: "bottom-right",
    });
  };

  const handleAuthNotify = () => {
    toast("درحال انتقال به صفحه احراز هویت 🔒");
  };

  return (
    <header
    className="
      fixed top-0  z-50 text-white flex justify-between items-center 
      h-[80px] py-2 px-[30px] md:mt-3 md:rounded-2xl shadow-lg backdrop-blur-md 
      bg-[var(--box)] backdrop:blur-3xl bg-opacity-60 shadow-black/20
      w-full max-w-screen-xl mx-auto container
    "
  >
 
  
  
      {/* منوی موبایل (فقط زیر md) */}
      <div className="flex items-center  justify-between w-full md:hidden">
        {/* آیکون منو */}
        {toggleMenu ? (
          <TbMenu3
            onClick={handleToggleMenu}
            className="text-3xl cursor-pointer"
          />
        ) : (
          <TbMenu4
            onClick={handleToggleMenu}
            className="text-3xl cursor-pointer"
          />
        )}

        {/* لوگو */}
        <a href="https://hominex.ir//">
          <img
            src="./images/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer"
          />
        </a>
      </div>

      {/* Dropdown موبایل */}
      <div
        className={`absolute top-20 transition-all md:hidden ${
          toggleMenu
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <DropdownMenu setToggleMenu={setToggleMenu} />
      </div>

      {/* محتوای دسکتاپ (فقط از md به بالا) */}
      <div className="hidden md:flex w-full justify-between items-center">
        {/* لوگو */}
        <div className="flex items-center gap-2">
          <a href="https://hominex.ir//">
            <img
              src="./images/logo.png"
              alt="logo"
              width={60}
              height={60}
              className="cursor-pointer"
            />
          </a>
          <div className="hidden lg:flex flex-col">
            <span className="text-xl font-bold">هومینکس</span>
          </div>
        </div>

        {/* منوی دسکتاپ */}
        <nav className="hidden lg:flex">
          <ul className="flex gap-7 justify-center mr-[-90px] md:mr-0 [&>li]:cursor-pointer [&>li]:relative">
            {routes.map((item, i) => (
              <li
                key={i}
                className="group flex flex-col items-center"
                onClick={
                  item.title === "ویژگی خانه من"
                    ? handleFeatureClick
                    : undefined
                }
              >
                <a
                  href={item.title === "ویژگی خانه من" ? "#" : item.route}
                  className="relative z-10 transition-colors duration-300 group-hover:text-white/70"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* دکمه ورود */}
        <a
          href="https://hominex.ir/account/dashboard/"
          className="hidden xl:block"
          onClick={handleAuthNotify}
        >
          <div className="p-3 rounded-xl cursor-pointer transition-all hover:bg-white hover:text-black">
            <FiUser className="text-2xl" />
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
