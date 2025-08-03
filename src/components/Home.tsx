import { useParams } from "react-router-dom";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";
import { getApi } from "../lib/apiCalls";
import type { Product, ProductListResult } from "../types/theme";
import Loading from "./Loading";

export default function Home() {
  const { id } = useParams();
  const [productList, setProductList] = useState<Product[]>([]);
  const [loader, setLoader] = useState<boolean>(true);

  async function getProductList(url: string) {
    try {
      setLoader(true);
      const res = await getApi<ProductListResult>(url);
      if (res?.products?.length) {
        setProductList(res.products);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  }

  useEffect(() => {
    let tempUrl = "products";
    if (id) {
      tempUrl += "/category?type=" + id;
    }
    getProductList(tempUrl);
  }, [id]);

  if (loader) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <>
      <main className="flex-1 p-4 bg-bk-50 overflow-y-auto">
        <ProductList productList={productList} />
      </main>
    </>
  );
}
