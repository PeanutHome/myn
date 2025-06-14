import Link from "next/link";

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  rating: number;
  reviews: number;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const discountPercentage = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <Link href={`/details?id=${product.id}`} className="block">
      <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="aspect-square w-full overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-200"
          />
        </div>
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-900 truncate">
            {product.brand}
          </h3>
          <p className="mt-1 text-sm text-gray-500 truncate">{product.name}</p>
          <div className="mt-2 flex items-center justify-between">
            <div>
              <p className="text-lg font-medium text-gray-900">
                ₹{product.price}
              </p>
              <div className="flex items-center space-x-2">
                <p className="text-sm text-gray-500 line-through">
                  ₹{product.originalPrice}
                </p>
                <p className="text-sm text-green-600">
                  {discountPercentage}% OFF
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-yellow-400">★</span>
              <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
              <span className="ml-1 text-sm text-gray-500">
                ({product.reviews})
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
