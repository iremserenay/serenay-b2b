import React from "react";

const BannerCatalog = () => {
  return (
    <div className="container mx-auto mt-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="h-[450px] bg-cover col-span-1 bg-[url('https://d3vpszern3jgjo.cloudfront.net/wp-content/uploads/2021/08/Catalog-scaled.jpg')]">
          <a
            href="/"
            className="h-full flex flex-col items-center p-10 banner-catalog bg-customBlue bg-opacity-40"
          >
            <p className="text-customBlue bg-white p-1 font-semibold text-sm uppercase text-center">
              promosyonlar
            </p>
            <h3 className="text-3xl text-white uppercase font-bold mt-5 text-center">
              güncel kataloglarımız
            </h3>
            <p className="text-white mt-3 text-center">
              Her an yenilenen kataloglarımız inceleyin, güncel fiyatları
              kaçırmayın.
            </p>
            <p className="bg-customLightBlue text-white font-bold text-lg mt-5 p-3 banner-catalog-btn">
              Hemen İncele
            </p>
          </a>
        </div>
        <div className="h-[450px] bg-cover col-span-1 bg-[url('https://d3vpszern3jgjo.cloudfront.net/wp-content/uploads/2021/08/Catalog-scaled.jpg')]">
          <a
            href="/"
            className="h-full flex flex-col items-center p-10 banner-catalog bg-customBlue bg-opacity-40"
          >
            <p className="text-customBlue bg-white p-1 font-semibold text-sm uppercase text-center">
              metro gastro
            </p>
            <h3 className="text-3xl text-white uppercase font-bold mt-5 text-center">
              metro gastro dergi
            </h3>
            <p className="text-white mt-3 text-center">
              Türkiye'nin ilk yemek kültürü dergisi Metro Gastro'yu sizlerle
              buluşturmaya devam ediyoruz.
            </p>
            <p className="bg-customLightBlue text-white font-bold text-lg mt-5 p-3 banner-catalog-btn">
              Hemen İncele
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerCatalog;
