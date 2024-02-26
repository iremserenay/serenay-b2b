import React from "react";

const MainBanner = () => {
  return (
    <div className="container mx-auto mt-3">
      <div className="bg-[url('https://bbdu.ac.in/wp-content/uploads/2020/05/banner-background-5.jpg')] bg-cover md:grid grid-cols-2 h-[420px] p-16 hidden">
        <div className="col-span-1">
          <span className="text-sm text-customBlue bg-white p-1 uppercase font-bold">
            metro gastro servİs
          </span>
          <h1 className="text-white text-4xl font-bold mt-5 w-1/2">
            İŞLETMENİZE ÖZEL METRO GASTRO SERVİS
          </h1>
          <p className="text-white mt-5 mb-7 w-2/3 text-lg">
            Metro Gastro Servis üyesi olabilir, işletmenize özel hizmetler ve
            fiyatlardan yararlanabilirsiniz.
          </p>
          <a
            href="/"
            className="bg-customLightBlue text-white px-4 py-3 hover:bg-[#0047b6] transition-all font-bold"
          >
            Hemen Üye Olun
          </a>
        </div>
      </div>
      <div className="block md:hidden bg-customBlue ">
        <div className="p-5">
          <span className="text-xs text-customBlue bg-white p-1 uppercase font-bold">
            metro gastro servİs
          </span>
          <h1 className="text-white text-2xl font-bold mt-5">
            İŞLETMENİZE ÖZEL METRO GASTRO SERVİS
          </h1>
          <p className="text-white text-sm mt-5">
            Metro Gastro Servis üyesi olabilir, işletmenize özel hizmetler ve
            fiyatlardan yararlanabilirsiniz.
          </p>
        </div>
        <img
          className="w-full h-[150px] object-cover"
          src="https://bbdu.ac.in/wp-content/uploads/2020/05/banner-background-5.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default MainBanner;
