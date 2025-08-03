import type { Product } from "../types/theme";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-contain bg-white p-4"
      />
      <div className="p-4 flex flex-col gap-2">
        <p className="text-xs text-gray-400">{product.brand} / {product.model}</p>
        <h2 className="font-semibold text-base line-clamp-2">{product.title}</h2>
        <p className="text-sm text-gray-600 line-clamp-3">{product.description}</p>

        <div className="flex items-center justify-between mt-2">
          <span className="font-bold text-lg text-black">${product.price}</span>
          <span className="text-sm text-green-600 font-medium">-{product.discount}% Off</span>
        </div>

        <div className="text-sm text-gray-500 mt-1 capitalize">
          Category: {product.category} | Color: {product.color}
        </div>
      </div>
    </div>
  );
}
