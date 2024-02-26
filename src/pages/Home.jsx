import BannerCatalog from "../components/BannerCatalog";
import Catalogs from "../components/Catalogs";
import Information from "../components/Information";
import MainBanner from "../components/MainBanner";
import ProductWorld from "../components/ProductWorld";
import Products from "../components/Products";
import Services from "../components/Services";
import SustainabilityBanner from "../components/SustainabilityBanner";
import Teasers from "../components/Teasers";
import TripleBanner from "../components/TripleBanner";

function Home() {
  return (
    <>
      <TripleBanner />
      <MainBanner />
      <Products />
      <Teasers />
      <ProductWorld />
      <Services />
      <BannerCatalog />
      <SustainabilityBanner />
      <Catalogs />
      <Information />
    </>
  );
}

export default Home;
