import { Heart } from "lucide-react";

interface ProductCardProps {
  image: string;
  discount: number;
  name: string;
  currentPrice: number;
  originalPrice: number;
  isFavorite?: boolean;
}

export default function ProductCard({
  image,
  discount,
  name,
  currentPrice,
  originalPrice,
  isFavorite,
}: ProductCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
      <div className="">
        {/* <img src={image} alt={name} className="w-full h-40 object-cover" /> */}
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          {discount}%
        </div>
        <button className="absolute top-2 right-2 text-white hover:text-yellow-400 transition-colors p-0">
          <Heart
            className={`w-6 h-6 ${
              isFavorite ? "fill-current" : "stroke-current"
            }`}
          />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-white text-sm font-semibold mb-2">{name}</h3>
        <div className="flex items-baseline">
          <span className="text-green-400 text-lg font-bold">
            ${currentPrice.toFixed(2)}
          </span>
          <span className="text-gray-500 text-sm line-through ml-2">
            ${originalPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
