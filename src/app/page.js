import Image from "next/image";
import BannerSlider from "./Components/Home-Components/BannerSlider";
import ChairCollection from "./Components/Home-Components/ChairCollection";
import ProductItems from "./Components/Home-Components/ProductItems";
import NewTrending from "./Components/Home-Components/NewTrending";
import SellingProduct from "./Components/Home-Components/SellingProduct";
import FreeShipping from "./Components/Home-Components/FreeShipping";
import CustumersSay from "./Components/Common/CustumersSay/CustumersSay";
import OurNewsLetter from "./Components/Home-Components/OurNewsLetter";
import ProductCart from "./Components/Home-Components/ProductCart";
import { getProducts } from "./api.services/Home.api";
export const metadata = {};

export default async function Home() {
  let data = await getProducts(); //Server Side Load
  console.log(data);

  metadata.title = " Online Furniture in India";
  metadata.description = "Online Furniture Description in India";
  return (
    <>
      <BannerSlider />
      <ChairCollection />
      {data && <ProductCart productData={data} />}

      <ProductItems />
      <NewTrending />
      <SellingProduct />
      <FreeShipping />
      <CustumersSay />
      <OurNewsLetter />
    </>
  );
}
