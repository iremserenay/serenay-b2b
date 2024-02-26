import React from "react";

const ProductWorld = () => {
  return (
    <div className="container mx-auto">
      <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-2">
        <div className="col-span-1 bg-white text-[#002d72] p-3 hover:shadow-lg transition-shadow">
          <img
            src="https://www.bhg.com/thmb/Mwd_YEkDbVg_fPsUDcWr3eZk9W0=/5645x0/filters:no_upscale():strip_icc()/difference-between-fruits-vegetables-01-5f92e7ec706b463287bcfb46985698f9.jpg"
            alt=""
            className="w-full h-[200px]"
          />
          <h2 className="text-lg font-bold my-3">Metro Markalı Ürünler</h2>
          <p className="text-gray-500 mb-5">
            Metro Chef, Aro, Rioba, Metro Premium ve Metro Professional ile
            tanıştınız mı?
          </p>
          <p className="underline">Hemen İncele</p>
        </div>
        <div className="col-span-1 bg-white text-[#002d72] p-3 hover:shadow-lg transition-shadow">
          <img
            src="https://www.tastingtable.com/img/gallery/the-strange-origin-of-blue-raspberry-upgrade/intro-1693494868.jpg"
            alt=""
            className="w-full h-[200px]"
          />
          <h2 className="text-lg font-bold my-3">Taze Gıdalar</h2>
          <p className="text-gray-500 mb-5">
            Çok çeşitli, çok lezzetli ve çok taze meyve sebzeler reyonlarımızda
            sizleri bekliyor.
          </p>
          <p className="underline">Hemen İncele</p>
        </div>
        <div className="col-span-1 bg-white text-[#002d72] p-3 hover:shadow-lg transition-shadow">
          <img
            src="https://www.bhg.com/thmb/Mwd_YEkDbVg_fPsUDcWr3eZk9W0=/5645x0/filters:no_upscale():strip_icc()/difference-between-fruits-vegetables-01-5f92e7ec706b463287bcfb46985698f9.jpg"
            alt=""
            className="w-full h-[200px]"
          />
          <h2 className="text-lg font-bold my-3">Coğrafi İşaretli Ürünler</h2>
          <p className="text-gray-500 mb-5">
            Metro "Coğrafi İşaretli" ürünlerle bu ülkenin gerçek lezzetlerine
            sahip çıkıyor, onları gelecek nesiller için yerinde koruyor.
          </p>
          <p className="underline">Hemen İncele</p>
        </div>
        <div className="col-span-1 bg-white text-[#002d72] p-3 hover:shadow-lg transition-shadow">
          <img
            src="https://www.tastingtable.com/img/gallery/the-strange-origin-of-blue-raspberry-upgrade/intro-1693494868.jpg"
            alt=""
            className="w-full h-[200px]"
          />
          <h2 className="text-lg font-bold my-3">Dondurulmuş Ürünler</h2>
          <p className="text-gray-500 mb-5">
            Metro Türkiye hem perakendede hem de işletmeler için dondurulmuş
            ürünlerde çözüm ortağınız oluyor.
          </p>
          <p className="underline">Hemen İncele</p>
        </div>
      </div>
    </div>
  );
};

export default ProductWorld;
