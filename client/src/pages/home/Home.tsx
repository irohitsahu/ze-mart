import React from "react";
import { HomeWrapper } from "./HomeStyle";
import ProductCard from "../../components/Card/ProductCard/ProductCard";

const Home = () => {
  return (
    <HomeWrapper>
      <ProductCard
        image="/path-to-your-image.jpg"
        discount={50}
        name="Apple 2021 Apple 16-inch MacBook Pro"
        currentPrice={2639.9}
        originalPrice={2920.9}
        isFavorite={false}
      />
    </HomeWrapper>
  );
};

export default Home;
