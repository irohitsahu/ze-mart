import { Heart } from "lucide-react";
import { ProductCardProps } from "../../../interface/types";

export default function ProductCard(props: ProductCardProps) {
  return (
    <div
      key={props.id}
      className="bg-gray-900 rounded-lg overflow-hidden shadow-lg min-w-64"
    >
      <div className="relative w-full">
        <img
          src={props.image_url}
          alt={props.item_name}
          className="w-full h-40 object-cover"
        />
        <div className="flex justify-between items-center absolute top-0 w-full p-1">
          <div className="bg-red-500 px-2 py-1">{props.discount}%</div>
          <button className="text-white hover:text-red-500 transition-colors p-0 w-6 h-6">
            <Heart
              size={16}
              className={`${
                props.is_favorite ? "fill-current" : "stroke-current"
              }`}
            />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-white text-sm font-semibold mb-2">
          {props.item_name}
        </h3>
        <p className="text-gray-400 text-sm mb-2">{props.description}</p>
        <div className="flex items-baseline">
          <span className="text-green-400 text-lg font-bold">
            $
            {Number(
              (props.originalPrice * (1 - props.discount / 100)).toFixed(4)
            )}
          </span>
          <span className="text-gray-500 text-sm line-through ml-2">
            ${Number(props.originalPrice.toFixed(4))}
          </span>
        </div>
      </div>
    </div>
  );
}
