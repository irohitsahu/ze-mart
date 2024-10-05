import { useGetItemsQuery } from "../../../service/itemApi";
import ProductCard from "../../Card/ProductCard/ProductCard";
import { ProductCardProps } from "../../../interface/types";
import { PopularProductWrapper } from "./PopularProductStyle";

const PopularProduct = () => {
  const { data: items, isLoading, isError } = useGetItemsQuery({});

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  return (
    <>
      <h1>Popular Products</h1>
      <PopularProductWrapper>
        {items.map((item: ProductCardProps) => {
          return <ProductCard key={item.id} {...item} />;
        })}
      </PopularProductWrapper>
    </>
  );
};

export default PopularProduct;
