import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1.2,
          infinite: false,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-customBlue text-lg font-bold ml-3">Hizmetlerimiz</h1>

      <Slider {...settings}>
        <div className="bg-white hover:shadow-lg transition-shadow">
          <a href="/">
            <img
              className="w-full h-[150px] md:h-[250px] object-cover"
              src="https://cdn.metro-online.com/-/media/Project/MCW/TR_Metro/anasayfa/MetroFastMobilUygulamaMetroFast464x232px.jpg?rev=e619f7d2b2a540d0b0a8cffba7844e9b&w=464&webp=1&hash=A0E6DBD89710EFF24A5781AF5890AC32"
              alt=""
            />
            <div className="flex flex-col items-center p-5 h-[200px]">
              <p className="bg-customDarkRed text-white uppercase font-bold p-1 text-xs mt-2">
                Hizmetlerimiz
              </p>
              <p className="text-customBlue text-lg md:text-3xl font-bold mt-4">
                METRO FAST
              </p>
              <p className="text-center text-sm md:text-base text-customGrey mt-3 ">
                Metro Fast’ı telefonunuza ya da mobil cihazınıza indirin, daha
                hızlı ve daha güvenli alışverişle deneyimiyle tanışın.
              </p>
            </div>
          </a>
        </div>
        <div className="bg-white hover:shadow-lg transition-shadow">
          <a>
            <img
              className="w-full h-[150px] md:h-[250px] object-cover"
              src="https://cdn.metro-online.com/-/media/Project/MCW/TR_Metro/App-Fast/MetroFastMobilUygulamaMobilUygulama440x250px.jpg?rev=6d26e12b4aa34d84b9ffda4be85caaae&w=464&webp=1&hash=F73D0716185A80692C9F5A3092178624"
              alt=""
            />
            <div className="flex flex-col items-center p-5 h-[200px]">
              <p className="bg-customDarkRed text-white uppercase font-bold p-1 text-xs mt-2">
                Mobil Uygulamamız
              </p>
              <p className="text-customBlue text-lg md:text-3xl font-bold mt-4">
                METRO FAST
              </p>
              <p className="text-center text-sm md:text-base text-customGrey mt-3 ">
                Metro Türkiye Mobil, alışverişinizin planlama aşamasından ödeme
                noktasına gelene kadar size pek çok avantaj sunuyor.
              </p>
            </div>
          </a>
        </div>
        <div className="bg-white hover:shadow-lg transition-shadow">
          <a>
            <img
              className="w-full h-[150px] md:h-[250px] object-cover"
              src="https://cdn.metro-online.com/-/media/Project/MCW/TR_Metro/services/2_440x250px.png?rev=b04b0784fdf5487f9085cdb0c7e24f61&w=464&webp=1&hash=69C41EEC5C4EA5518E2FDC89B66BF2E0"
              alt=""
            />
            <div className="flex flex-col items-center p-5 h-[200px]">
              <p className="bg-customDarkRed text-white uppercase font-bold p-1 text-xs mt-2">
                Hizmetlerimiz
              </p>
              <p className="text-customBlue text-center text-lg md:text-3xl font-bold mt-4">
                HORECA DİJİTAL ÇÖZÜMLER
              </p>
              <p className="text-center text-sm md:text-base text-customGrey mt-3 ">
                Sizin ve işletmeniz için geliştirdiğimiz servisleri keşfedin,
                işletmenizde dijital dönüşümü başlatın.
              </p>
            </div>
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default Services;
