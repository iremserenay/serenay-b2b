import React, { useState, useEffect } from "react";
import axios from "axios";
import { PiHeartStraightBold, PiHeartStraightFill } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
import ProductDetailAccordion from "../components/ProductDetailAccordion";
import { MdAddShoppingCart } from "react-icons/md";
import Modal from "../components/Modal";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [cartItems, setCartItems] = useState([]);
  function addToCart(product) {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  }
  let { userId } = useParams();
  console.log("id", userId);
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://shop.orient.at/sermobileboss/get_product/${userId}`)
      .then((response) => {
        const data = response.data;
        setProductData(data);
        console.log("productData", productData);
      })
      .catch((error) => {
        console.log("Error fatching data", error);
      });
  }, []);

  console.log("data", productData);
  const [liked, setLiked] = useState(false);

  function handleClickLike() {
    setLiked((prevState) => !prevState);
  }

  const MENSEI = ["Türkiye"];
  const BESINDEGERLERI = [
    "Doymuş Yağ (g) : 0",
    "Yağ (g) : 0",
    "Karbonhidrat (g) : 0",
    "Şekerler (g) : 0",
    "Protein (g) : 0",
    "Tuz (g) : 0.066",
  ];
  const ICINDEKILER = ["Doğal maden suyu"];

  return (
    <div className="container mx-auto mt-10 relative flex items-center justify-center">
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
        key={productData.id}
      >
        <div className="col-span-1 md:col-span-2 shadow-lg bg-white grid grid-cols-1 md:grid-cols-5 p-5 gap-5">
          <div className="col-span-1 md:col-span-2">
            <div className="relative">
              <img
                src={productData.image}
                alt={productData.title}
                className="w-90 h-90 object-cover "
              />
              <button
                className="absolute top-5 right-5"
                onClick={handleClickLike}
              >
                {liked ? (
                  <PiHeartStraightFill size={24} className="text-customBlue" />
                ) : (
                  <PiHeartStraightBold size={24} className="text-customBlue" />
                )}
              </button>
              <Modal image={productData.image} />
            </div>
            <div className="flex items-center justify-between px-3 gap-3 mt-10">
              <a
                href="/"
                className="text-customBlue flex items-center justify-between shadow-lg hover:bg-customProduct transition-all rounded-sm border p-3 gap-6"
              >
                <p className="font-bold text-xs leading-4">
                  {productData.title} Markalı Ürünler
                </p>
                <p className="flex items-center justify-center p-2 bg-productButtons rounded-full">
                  <FaArrowRight size={10} />
                </p>
              </a>
              <a
                href="/"
                className="text-customBlue flex items-center justify-between shadow-lg hover:bg-customProduct transition-all rounded-sm border p-3 gap-6"
              >
                <p className="font-bold text-xs leading-4">
                  {productData.title} Markalı Ürünler
                </p>
                <p className="flex items-center justify-center p-2 bg-productButtons rounded-full">
                  <FaArrowRight size={10} />
                </p>
              </a>
            </div>
          </div>
          <div className="col-span-1 md:col-span-3 text-customBlue">
            <p className="text-xs text-productSize">318771</p>
            <h2 className="mt-1 font-semibold text-lg">{productData.title}</h2>
            <div>
              <h3 className="font-semibold text-sm pt-3 pb-2 border-b">
                Ürün Açıklaması
              </h3>
              <div className="mt-1">
                <h4 className="font-semibold text-xs pt-3 pb-2">
                  Özel Muhafaza ve/veya Kullanım Koşulları :
                </h4>
                <p className="text-xs">
                  Nemsiz, kokusuz ve kuru ortam koşullarında, dış ambalajın
                  hasar görmeyeceği, direkt güneş ışığı, yağmur ve darbelerden
                  korunacak şekilde muhafaza edilmelidir.
                </p>
              </div>
              <div className="mt-1">
                <h4 className="font-semibold text-xs pt-3 pb-2">
                  Gıda/Gıdadışı İşletmecisinin Bilgisi :
                </h4>
                <p className="text-xs">
                  Beypazari Karakoca Maden Suyu Isl. Ltd. Sti./ Cumhuriyet Mah.
                  Inözü Kalinyol Kümeevler Sok. No:89/A Beypazari Ankara
                </p>
              </div>
              <div className="mt-1">
                <h4 className="font-semibold text-xs pt-3 pb-2">
                  İşletme Kayıt Numarası :
                </h4>
                <p className="text-xs">MS.06.001</p>
              </div>
              <div className="mt-1">
                <h4 className="font-semibold text-xs pt-3 pb-2">
                  Alerjen Bileşenler :
                </h4>
                <p className="text-xs">Alerjen içerik bulunmamaktadir.</p>
              </div>
              <div className="mt-1">
                <h4 className="font-semibold text-xs pt-3 pb-2">
                  Detaylı Ürün Bilgisi :
                </h4>
                <p className="text-xs">
                  Dogal mineraller içeren dogal bir madensuydur. Yerin en derin
                  katmanlarindan çikar, çiktigi yerin jeolojik özelliklerini
                  tasir ve magmadan aldigi karbondioksit gazinin basinci
                  vasitasi ile yeryüzüne çikarlar. Beypazari maden suyunun
                  kaynagi, Ankara Beypazari'nda bulunmaktadir
                </p>
              </div>
            </div>

            <ProductDetailAccordion title="Menşei" answers={MENSEI} />
            <ProductDetailAccordion
              title="Besin Değerleri"
              answers={BESINDEGERLERI}
            />
            <ProductDetailAccordion title="İçindekiler" answers={ICINDEKILER} />
          </div>
        </div>
        <div className="col-span-1 shadow-lg bg-customProduct p-5 h-fit">
          <div className="flex justify-between">
            <p className="font-semibold">Ürün Fiyatı</p>
            <p className="font-semibold text-2xl text-customBlue ">
              {productData.price} TL
            </p>
          </div>
          <button
            className="flex items-center justify-center bg-productButtons w-full py-2 border-2 border-white font-semibold rounded-full mt-5"
            onClick={() => addToCart(productData)}
          >
            <MdAddShoppingCart size={20} />
            <p>Sepete Ekle</p>
          </button>
          <div className="flex justify-between items-center mt-8">
            <p className="font-semibold text-sm">Birim Fiyat</p>
            <p className="font-light text-xs">{productData.price}TL / Litre</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
