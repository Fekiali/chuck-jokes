import { useEffect, useState } from "react";
import JokesServices from "../../services/JokesServices";
import { randDarkColor } from "../../commun/helper";

export default function Categories(props) {
  const [categories, setCategories] = useState(["Uncategorized"]);
  const [seeMore, setSeeMore] = useState(false);
  useEffect(() => {
    JokesServices.GetJokesCategoryList().then((data) =>
      setCategories([...data, ...categories])
    );
  }, []);

  return (
    <>
      <div className="category-container">
        {categories.map((category, index) => (
          <button
            style={{
              backgroundColor: `${randDarkColor()}`,
              display: `${index > 7 ? (seeMore ? "" : "none") : ""}`,
            }}
            className="card-category"
            onClick={() => props.setCategory(category)}
          >
            {category.toUpperCase()} JOKES
          </button>
        ))}
        <button
          style={{
            backgroundColor: `${randDarkColor()}`,
            display: `${seeMore ? "none" : ""}`,
          }}
          onClick={() => setSeeMore(!seeMore)}
          className="card-category"
        >
          View All
        </button>
      </div>
    </>
  );
}
