import React from "react";
import { BsTelephone, BsTelephoneInbound } from "react-icons/bs";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import Accordion from "./Accordion";
import ContactAccordion from "./ContactAccordion";
import { Link } from "react-router-dom";

const Footer = () => {
  const hakkinda = [
    "Nasıl Metro Müşterisi Olurum?",
    "Hakkımızda",
    "Sürdürülebilirlik",
    "Kalite ve Ürün Güvenliği",
    "Metro'da Kariyer",
    "İşin Doğrusu / İş Prensiplerimiz",
    "Metro Etik Hattı",
  ];
  const magazalarimiz = [
    "En Yakın Mağazayı Bul",
    "Promosyonlar",
    "Metro Fast",
    "Mobil Uygulamamız",
    "Bireysel Banka Kampanyaları",
    "Kurumsal Banka Kampanyaları",
  ];
  const yardim = [
    "Sıkça Sorulan Sorular",
    "İade Garantisi",
    "Fatura Görüntüleme Uygulaması",
    "Gastro Servis İade Uygulaması",
  ];

  return (
    <div className="mt-10 bg-white pt-10">
      <div className="container mx-auto hidden md:block">
        <div className="grid grid-cols-4 ">
          <div className="col-span-1 flex flex-col gap-3">
            <h3 className="text-lg text-customBlue font-bold">
              Metro Hakkında
            </h3>
            <Link
              to="/"
              className="text-customBlue hover:text-customLightBlue transition-all"
            >
              Nasıl Metro Müşterisi Olurum?
            </Link>
            <Link
              to="/"
              className="text-customBlue hover:text-customLightBlue transition-all"
            >
              Hakkımızda
            </Link>
            <Link
              to="/"
              className="text-customBlue hover:text-customLightBlue transition-all"
            >
              Sürdürülebilirlik
            </Link>
            <Link
              to="/"
              className="text-customBlue hover:text-customLightBlue transition-all"
            >
              Kalite ve Ürün Güvenliği
            </Link>
            <Link
              to="/"
              className="text-customBlue hover:text-customLightBlue transition-all"
            >
              Metro'da Kariyer
            </Link>
            <Link
              to="/"
              className="text-customBlue hover:text-customLightBlue transition-all"
            >
              İşin Doğrusu / İş Prensiplerimiz
            </Link>
            <Link
              to="/"
              className="text-customBlue hover:text-customLightBlue transition-all"
            >
              Metro Etik Hattı
            </Link>
          </div>
          <div className="col-span-1 flex flex-col gap-3">
            <h3 className="text-lg text-customBlue font-bold">
              Mağazalarımız ve Hizmetler
            </h3>
            <Link
              to="/"
              className="text-customBlue hover:text-customLightBlue transition-all"
            >
              En Yakın Mağazayı Bul
            </Link>
            <Link
              to="/"
              className="text-customBlue hover:text-customLightBlue transition-all"
            >
              Promosyonlar
            </Link>
            <Link
              to="/"
              className="text-customBlue hover:text-customLightBlue transition-all"
            >
              Metro Fast
            </Link>
            <Link
              to="/"
              className="text-customBlue hover:text-customLightBlue transition-all"
            >
              Mobil Uygulamamız
            </Link>
            <Link
              to="/"
              className="text-customBlue hover:text-customLightBlue transition-all"
            >
              Bireysel Banka Kampanyaları
            </Link>
            <Link
              to="/"
              className="text-customBlue hover:text-customLightBlue transition-all"
            >
              Kurumsal Banka Kampanyaları
            </Link>
          </div>
          <div className="col-span-1 flex flex-col gap-3">
            <h3 className="text-lg text-customBlue font-bold">Yardım</h3>
            <Link
              to="/"
              className="text-customBlue hover:text-customLightBlue transition-all"
            >
              Sıkça Sorulan Sorular
            </Link>
            <Link
              to="/"
              className="text-customBlue hover:text-customLightBlue transition-all"
            >
              İade Garantisi
            </Link>
            <Link
              to="/"
              className="text-customBlue hover:text-customLightBlue transition-all"
            >
              Fatura Görüntüleme Uygulaması
            </Link>
            <Link
              to="/"
              className="text-customBlue hover:text-customLightBlue transition-all"
            >
              Gastro Servis İade Uygulaması
            </Link>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg text-customBlue font-bold">Yardım</h3>
            <div className="flex items-center gap-3 mt-3">
              <BsTelephone size={18} className="text-customLightBlue" />
              <Link
                to="/"
                className="underline text-customBlue hover:text-customLightBlue transition-all"
              >
                444 50 40
              </Link>
            </div>
            <Link
              to="/"
              className="inline-flex items-center gap-3 text-customLightBlue text-lg hover:text-white border-2 border-customLightBlue hover:bg-customLightBlue px-5 py-3 mt-3 transition-all"
            >
              <BsTelephoneInbound size={19} />
              <span className="font-bold">Whatsapp Destek Hattı</span>
            </Link>
            <p className="text-[11px] my-4">
              Haftanın her günü 7:30 - 22:00 saatleri arasında bize
              ulaşabilirsiniz.
            </p>
            <Link
              to="/"
              className="text-customBlue hover:text-customLightBlue transition-all"
            >
              İletişim Formu
            </Link>
            <h4 className="text-lg text-customBlue font-bold mt-5">
              Bizi Takip Edin
            </h4>
            <div className="flex gap-3 items-center mt-3 text-customLightBlue">
              <Link to="/">
                <FiFacebook size={24} />
              </Link>
              <Link to="/">
                <FiInstagram size={24} />
              </Link>
              <Link to="/">
                <FiYoutube size={24} />
              </Link>
              <Link to="/">
                <FaXTwitter size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-customBgLightBlue text-customGrey text-center py-3 mt-10 text-sm">
          © Metro Türkiye 2023
        </div>
      </div>
      <div className="container mx-auto block md:hidden">
        <div className="px-4">
          <Accordion title="Metro Hakkında" answers={hakkinda} />
          <Accordion
            title="Mağazalarımız ve Hizmetler"
            answers={magazalarimiz}
          />
          <Accordion title="Yardım" answers={yardim} />
          <ContactAccordion />
          <div className="flex flex-col items-center">
            <h4 className="text-lg text-customBlue font-bold mt-5">
              Bizi Takip Edin
            </h4>
            <div className="flex gap-3 items-center mt-3 text-customLightBlue">
              <Link to="/">
                <FiFacebook size={24} />
              </Link>
              <Link to="/">
                <FiInstagram size={24} />
              </Link>
              <Link to="/">
                <FiYoutube size={24} />
              </Link>
              <Link to="/">
                <FaXTwitter size={24} />
              </Link>
            </div>
          </div>
          <div className="bg-customBgLightBlue text-customGrey text-center py-3 mt-10 text-sm">
            © Metro Türkiye 2023
          </div>
        </div>
      </div>
      <div className="bg-customBlue text-white underline py-5 mt-3 text-sm px-2">
        <div className="container mx-auto flex gap-5">
          <Link to="/">Çerezler</Link>
          <Link to="/">Aydınlanma Metni</Link>
          <Link to="/">Kullanım Koşulları</Link>
          <Link to="/">Bilgi Toplumu Hizmetleri</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
