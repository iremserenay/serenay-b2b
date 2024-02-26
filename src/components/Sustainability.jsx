import React from "react";
const SustainabilityBanner = () => {
  return (
    <div className="container mx-auto mt-5">
      <div className="hidden md:block">
        <h2 className="ml-3 text-customBlue font-bold text-lg mb-2">
          Sürdürülebilirlik platformu
        </h2>
        <div className="bg-cover bg-[url('https://cdn.initial.com/content/local/uk-ini/images/desktop/main_sustainability-banner.jpg')] ">
          <a
            href="/"
            className="flex flex-col items-center p-10 banner-catalog bg-customBlue bg-opacity-40"
          >
            <p className="text-customBlue bg-white p-1 font-semibold text-sm uppercase text-center">
              sürdürülebilir bir dünya için
            </p>
            <h3 className="text-3xl text-white uppercase font-bold mt-5 text-center">
              sürdürülebilir bir gelecek için yarının yanında işin mutfağındayız
            </h3>
            <p className="text-white mt-3 text-center">
              Yerel üreticilerle iş birliği yaparak yeni kaynaklar oluşturmayı
              ve bu kaynakları daha fazla kişiye ulaştırmayı hedefliyoruz.
            </p>
            <p className="bg-customLightBlue text-white font-bold text-lg mt-5 p-3 banner-catalog-btn">
              Hemen İnceleyin
            </p>
          </a>
        </div>
      </div>
      <div className="block md:hidden">
        <h2 className="ml-3 text-customBlue font-bold mb-2">
          Sürdürülebilirlik platformu
        </h2>
        <div className="bg-customBlue flex flex-col items-center p-3 mx-2">
          <p className="text-customBlue bg-white p-1 font-semibold text-xs uppercase text-center mt-3">
            sürdürülebilir bir dünya için
          </p>
          <h3 className="text-xl text-white uppercase font-bold mt-5 text-center px-4">
            sürdürülebilir bir gelecek için yarının yanında işin mutfağındayız
          </h3>
          <p className="text-white mt-3 text-center px-9 text-[10px]">
            Yerel üreticilerle iş birliği yaparak yeni kaynaklar oluşturmayı ve
            bu kaynakları daha fazla kişiye ulaştırmayı hedefliyoruz.
          </p>
          <p className="bg-customLightBlue text-white font-bold text-sm mt-5 py-3 w-full text-center banner-catalog-btn">
            Hemen İnceleyin
          </p>
          <div className="bg-customBlue opacity-40 w-full">
            <img
              className="mt-10 h-[150px] w-full object-cover"
              src="https://cdn.initial.com/content/local/uk-ini/images/desktop/main_sustainability-banner.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityBanner;
