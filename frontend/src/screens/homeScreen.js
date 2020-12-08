import React from "react";

import SlideShow from "../components/SlideShow";
import AllProductScreen from "./allProductScreen";

const HomeScreen = () => {
  return (
    <div>
      <SlideShow></SlideShow>
      <AllProductScreen></AllProductScreen>
      <div className="flex-c-m flex-w w-full p-t-45">
        <a
          href="/all"
          className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
        >
          Load More
        </a>
      </div>
    </div>
  );
};

export default HomeScreen;
