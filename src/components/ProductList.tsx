import type { Product } from "../types/theme";
import ProductCard from "./ProductCard";

export default function ProductList({productList}: { productList:Product[]}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
