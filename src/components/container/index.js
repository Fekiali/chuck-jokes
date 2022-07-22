import Carousel from "./Carousel";
import Categories from "./Categories";
import Jokes from "./Jokes";
import { useState } from "react";

export default function Container() {
  const [category, setCategory] = useState("");
  return (
    <>
      <Carousel></Carousel>
      <div className="categories-block">
        <Categories
          setCategory={(category) => setCategory(category)}
        ></Categories>
        <Jokes category={category}></Jokes>
      </div>
    </>
  );
}
