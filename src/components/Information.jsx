import React from "react";
import { PiCreditCardThin } from "react-icons/pi";
import { GiSmartphone } from "react-icons/gi";
import { CiPercent } from "react-icons/ci";
import { LiaCrownSolid } from "react-icons/lia";

const Information = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <a
          href="/"
          className="col-span-1 flex flex-col items-center information"
        >
          <PiCreditCardThin size={50} className="text-[#156bfa]" />
          <p className="text-lg text-customBlue font-bold mt-3">
            Nasıl Metro Müşterisi Olurum?
          </p>
          <p className="underline text-customBlue mt-4 information-btn">
            Detayları İncele
          </p>
        </a>
        <a
          href="/"
          className="col-span-1 flex flex-col items-center information"
        >
          <GiSmartphone size={50} className="text-[#156bfa]" />
          <p className="text-lg text-customBlue font-bold mt-3">
            Mobil Uygulamamız
          </p>
          <p className="underline text-customBlue mt-4 information-btn">
            Hemen Keşfet
          </p>
        </a>
        <a
          href="/"
          className="col-span-1 flex flex-col items-center information"
        >
          <CiPercent size={50} className="text-[#156bfa]" />
          <p className="text-lg text-customBlue font-bold mt-3">
            Promosyonlarımız
          </p>
          <p className="underline text-customBlue mt-4 information-btn">
            Daha Fazlasını Gör
          </p>
        </a>
        <a
          href="/"
          className="col-span-1 flex flex-col items-center information"
        >
          <LiaCrownSolid size={50} className="text-[#156bfa]" />
          <p className="text-lg text-customBlue font-bold mt-3">
            Metro Markalı Ürünlerimiz
          </p>
          <p className="underline text-customBlue mt-4 information-btn">
            Detayları Keşfet
          </p>
        </a>
      </div>
    </div>
  );
};

export default Information;
