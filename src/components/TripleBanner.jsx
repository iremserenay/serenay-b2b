import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const TripleBanner = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.2,
    slidesToScroll: 1.2,
    initialSlide: 0,
  };
  return (
    <div className="container mx-auto mt-3">
      <div className="md:grid grid-cols-5 gap-3 hidden">
        <div className="col-span-3 bg-white grid grid-cols-3 hover:shadow-lg transition-all">
          <div className="col-span-2 text-customBlue banner-catalog p-10">
            <h1 className="text-6xl font-bold uppercase ">
              bİtkİ bazlı ve vegan
            </h1>
            <div className="flex items-center mt-10">
              <img
                src="https://cdn.metro-online.com/-/media/Project/MCW/TR_Metro/bitkisel-vegan/Fermente_Sozme_Kaju_MC_600x600_v1.jpeg?rev=c61c6e46d12d4d858d1a03ffaa174fb0&w=251&webp=1&hash=F67D5D9AD7785A715438EDD30A5C69E9"
                alt=""
              />
              <div>
                <p>Fermente Süzme</p>
                <p className="uppercase text-3xl font-bold">kaju</p>
                <p className="text-xs mt-3 mb-4">900g</p>
                <a
                  href="/"
                  className="bg-customLightBlue text-white font-bold text-lg mt-5 p-3 banner-catalog-btn transition-all"
                >
                  Daha Fazlasını İncele
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <img
              src="https://cdn.metro-online.com/-/media/Project/MCW/TR_Metro/anasayfa/VEGAN_2023_BASKI_355x5122.jpg?rev=6633eec8c6a34c52a931cf9afd680e53&w=355&webp=1&hash=B4496FABE6C21EBE5606B063DFBF0C43"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-3 h-full">
          <a
            href="/"
            className="flex-1 w-full h-full bg-no-repeat bg-cover bg-[url('https://cdn.metro-online.com/-/media/Project/MCW/TR_Metro/anasayfa/1-7-Subat_584x250_banner.jpeg?rev=b115dbaa96b64eb28269e5e99e45b946&w=584&hash=3BE4DEA4A212387CAEB39CB911306671')] p-10 banner-catalog hover:shadow-lg transition-all"
          >
            <p className="text-3xl uppercase text-white font-bold w-2/3 drop-shadow-md">
              haftanın taze ürünlerİ
            </p>
            <button className="bg-customLightBlue text-white font-bold text-lg mt-16 p-3 banner-catalog-btn transition-all">
              Hemen Keşfet
            </button>
          </a>
          <a
            href="/"
            className="flex-1 w-full h-full bg-no-repeat bg-cover bg-[url('https://cdn.metro-online.com/-/media/Project/MCW/TR_Metro/anasayfa/Arabali_584x250_v41.jpg?rev=11b554e8a76f462fb09718caf31520e7&w=584&hash=3ED60EF3E7F90AAE5467163DF466A083')] p-10 banner-catalog hover:shadow-lg transition-all"
          >
            <p className="text-3xl uppercase text-white font-bold w-2/3 drop-shadow-md">
              metro usülü alişveriş başladı
            </p>
            <button className="bg-customLightBlue text-white font-bold text-lg mt-16 p-3 banner-catalog-btn transition-all">
              Hemen Keşfet
            </button>
          </a>
        </div>
      </div>
      <div className="md:hidden">
        <Link to="" className="bg-white text-customBlue p-10 inline-block">
          <h1 className="text-2xl font-bold uppercase ">
            bİtkİ bazlı ve vegan
          </h1>
          <div className="flex items-center mt-10">
            <img
              src="https://cdn.metro-online.com/-/media/Project/MCW/TR_Metro/bitkisel-vegan/Fermente_Sozme_Kaju_MC_600x600_v1.jpeg?rev=c61c6e46d12d4d858d1a03ffaa174fb0&w=251&webp=1&hash=F67D5D9AD7785A715438EDD30A5C69E9"
              alt=""
              className="w-1/2"
            />
            <div>
              <p>Fermente Süzme</p>
              <p className="uppercase text-3xl font-bold">kaju</p>
              <p className="text-xs mt-3 mb-4">900g</p>
            </div>
          </div>
          <div className="bg-customLightBlue text-white font-bold text-lg text-center mt-5 p-3 w-full">
            Daha Fazlasını İncele
          </div>
        </Link>
        <Slider {...settings}>
          <a
            href="/"
            className="w-full h-[138px] bg-no-repeat bg-contain bg-[url('https://cdn.metro-online.com/-/media/Project/MCW/TR_Metro/anasayfa/1-7-Subat_584x250_banner.jpeg?rev=b115dbaa96b64eb28269e5e99e45b946&w=584&hash=3BE4DEA4A212387CAEB39CB911306671')] p-5"
          >
            <p className="text-xl uppercase text-white font-bold w-2/3 drop-shadow-md">
              haftanın taze ürünlerİ
            </p>
          </a>
          <a
            href="/"
            className="w-full h-[138px] bg-no-repeat bg-contain bg-[url('https://cdn.metro-online.com/-/media/Project/MCW/TR_Metro/anasayfa/Arabali_584x250_v41.jpg?rev=11b554e8a76f462fb09718caf31520e7&w=584&hash=3ED60EF3E7F90AAE5467163DF466A083')] p-5 banner-catalog hover:shadow-lg transition-all"
          >
            <p className="text-xl uppercase text-white font-bold w-2/3 drop-shadow-md">
              metro usülü alişveriş başladı
            </p>
          </a>
        </Slider>
      </div>
    </div>
  );
};

export default TripleBanner;
