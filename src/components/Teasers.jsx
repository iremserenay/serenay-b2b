import React from "react";
import { IoStorefrontOutline } from "react-icons/io5";
import { ImMobile } from "react-icons/im";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdOutlinePayments } from "react-icons/md";

const Teasers = () => {
  return (
    <div className="container mx-auto mt-2">
      <div className="grid md:grid-cols-4 grid-cols-1 gap-2">
        <a
          href="/"
          className="col-span-1 bg-[#cce0ff] flex items-center md:flex-col py-5 px-2 gap-3 md:gap-0 text-[#002d72] hover:shadow-2xl transition-shadow"
        >
          <IoStorefrontOutline className="text-[30px] md:text-[60px]" />
          <span className="underline font-medium md:font-bold md:mt-5">
            Mağazalar
          </span>
        </a>
        <a
          href="/"
          className="col-span-1 bg-[#cce0ff] flex items-center md:flex-col py-5 px-2 gap-3 md:gap-0 text-[#002d72] hover:shadow-2xl transition-shadow"
        >
          <ImMobile className="text-[30px] md:text-[60px]" />
          <span className="underline font-medium md:font-bold md:mt-5">
            Mobil Uygulamamız
          </span>
        </a>
        <a
          href="/"
          className="col-span-1 bg-[#cce0ff] flex items-center md:flex-col py-5 px-2 gap-3 md:gap-0 text-[#002d72] hover:shadow-2xl transition-shadow"
        >
          <HiOutlineDesktopComputer className="text-[30px] md:text-[60px]" />
          <span className="underline font-medium md:font-bold md:mt-5">
            Metro Online
          </span>
        </a>
        <a
          href="/"
          className="col-span-1 bg-[#cce0ff] flex items-center md:flex-col py-5 px-2 gap-3 md:gap-0 text-[#002d72] hover:shadow-2xl transition-shadow"
        >
          <MdOutlinePayments className="text-[30px] md:text-[60px]" />
          <span className="underline font-medium md:font-bold md:mt-5">
            Online Ödeme
          </span>
        </a>
      </div>
    </div>
  );
};

export default Teasers;
