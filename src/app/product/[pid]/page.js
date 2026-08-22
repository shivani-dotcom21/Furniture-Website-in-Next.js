import { getProductDetails } from "@/app/api.services/product.api";
import BreadCrums from "@/app/Components/Common/BreadCrums/BreadCrums";
import SingleDetails from "@/app/Components/product-components/SingleDetails";

import React from "react";

export default async function productDetails(req) {
  let { pid } = await req.params;

  let data = await getProductDetails(pid)
  console.log(data);

  return (
    <>
      <BreadCrums title={data.title}/>
      <SingleDetails data={data} />
    </>
  );
}
