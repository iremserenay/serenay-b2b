import React from "react";
import { FiTruck, FiSearch } from "react-icons/fi";
import { PiCursorClickBold } from "react-icons/pi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { FaUserLarge } from "react-icons/fa6";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky top-0 z-10">
      <div className="bg-[#012d72] hidden md:block">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/">
            <img
              className="w-[130px] h-[32px]"
              src="https://placehold.co/200x400"
              alt="logo"
            />
          </Link>
          <div className="flex items-center justify-between gap-3 py-4">
            <Dropdown />

            <Link
              to="/"
              className="flex items-center gap-3 border-2 py-2 px-6 rounded-[30px] hover:bg-[#516d9e] hover:border-[#516d9e] transition-all"
            >
              <LiaShippingFastSolid color="white" size={24} />
              <span className="text-white font-bold">
                Promosyonlar & Ürünler
              </span>
            </Link>
            <Link
              to="/"
              className="flex items-center gap-3 border-2 py-2 px-6 rounded-[30px] hover:bg-[#516d9e] hover:border-[#516d9e] transition-all"
            >
              <PiCursorClickBold color="white" size={24} />
              <span className="text-white font-bold">Metro Online</span>
            </Link>
            <Link
              to="/"
              className="flex items-center gap-3 border-2 py-2 px-6 rounded-[30px] hover:bg-[#516d9e] hover:border-[#516d9e] transition-all"
            >
              <FiTruck color="white" size={24} />
              <span className="text-white font-bold">Gastro Servis</span>
            </Link>
            <Link
              to="/"
              className="flex items-center gap-3 border-2 py-2 px-6 rounded-[30px] hover:bg-[#516d9e] hover:border-[#516d9e] transition-all"
            >
              <HiOutlineInformationCircle color="white" size={24} />
              <span className="text-white font-bold">Bilgi & Hizmetler</span>
            </Link>
          </div>
          <Link to="/search">
            <FiSearch color="white" size={24} />
          </Link>
          <Link
            to="/login"
            className="bg-[#0059e4] h-full py-4 flex items-center gap-3 px-3 hover:bg-[#0047b6] transition-all"
          >
            <FaUserLarge size={32} color="white" />
            <span className="text-white font-bold">Üye Ol/Giriş Yap</span>
          </Link>
        </div>
      </div>
      <div className="bg-[#012d72] md:hidden">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <Link to="/">
              <img
                className="w-[120px] h-[24px]"
                src="https://cdn.metro-online.com/-/media/Project/MCW/shared/Bucket-Header/METRO.svg?rev=-1&w=129&hash=DB804DB52AB628282509929F5704CC77"
                alt="logo"
              />
            </Link>
            <Link
              to="/login"
              className="bg-[#0059e4] h-full py-4 flex items-center gap-3 px-3 hover:bg-[#0047b6] transition-all"
            >
              <FaUserLarge size={20} color="white" />
              <span className="text-white text-sm">Üye Ol/Giriş Yap</span>
            </Link>
          </div>
          <div className="flex relative overflow-x-auto overflow-y-hidden whitespace-nowrap	 items-center justify-between gap-3 py-4 px-2">
            <Link
              to="/"
              className="flex items-center gap-3 border-2 py-2 px-6 rounded-[30px] hover:bg-[#516d9e] hover:border-[#516d9e] transition-all"
            >
              <LiaShippingFastSolid color="white" size={24} />
              <span className="text-white font-bold">
                Promosyonlar & Ürünler
              </span>
            </Link>
            <Link
              to="/"
              className="flex items-center gap-3 border-2 py-2 px-6 rounded-[30px] hover:bg-[#516d9e] hover:border-[#516d9e] transition-all"
            >
              <PiCursorClickBold color="white" size={24} />
              <span className="text-white font-bold">Metro Online</span>
            </Link>
            <Link
              to="/"
              className="flex items-center gap-3 border-2 py-2 px-6 rounded-[30px] hover:bg-[#516d9e] hover:border-[#516d9e] transition-all"
            >
              <FiTruck color="white" size={24} />
              <span className="text-white font-bold">Gastro Servis</span>
            </Link>
            <Link
              to="/"
              className="flex items-center gap-3 border-2 py-2 px-6 rounded-[30px] hover:bg-[#516d9e] hover:border-[#516d9e] transition-all"
            >
              <HiOutlineInformationCircle color="white" size={24} />
              <span className="text-white font-bold">Bilgi & Hizmetler</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
