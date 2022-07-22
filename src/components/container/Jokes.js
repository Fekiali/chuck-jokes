import useInfiniteScroll from "../../commun/hooks/useInfiniteScroll";
import { useEffect, useState } from "react";
import JokesServices from "../../services/JokesServices";
import GreenLight from "../../assets/green-light.png";
import Path from "../../assets/path.png";
import React from "react";

export default function Jokes({ category }) {
  const [jokesList, setJokesList] = useState([]);
  const [jokes, setJokes] = useState([]);
  const [loadMore, setLoadMore] = useInfiniteScroll(fetchMoreListItems);

  useEffect(() => {
    JokesServices.GetJokes().then((data) => {
      if (category.length) {
        let filtredList = [];
        if (category == "Uncategorized") {
          filtredList = data.result.filter((el) => !el.categories.length);
        } else {
          filtredList = data.result.filter((el) =>
            el.categories.includes(category)
          );
        }

        setJokesList(filtredList);
        setJokes(filtredList.splice(0, 9));
      } else {
        setJokesList(data.result);
        setJokes(data.result.splice(0, 9));
      }
    });
  }, [category]);

  function fetchMoreListItems() {
    if (!jokesList.length) setLoadMore(false);
    setTimeout(() => {
      setJokes((prev) => [...prev, ...jokesList.splice(0, 9)]);
      setLoadMore(false);
    }, 1500);
  }
  return (
    <>
      <div className="jokes-container">
        {jokes.length ? (
          jokes.map((joke, index) => (
            <React.Fragment key={index}>
              <div className="jokes-card">
                <div className="category-joke">
                  <img
                    className="green-light-img"
                    src={GreenLight}
                    alt="green-light"
                  />

                  {!joke.categories.length
                    ? "UNCATEGORIZED"
                    : joke.categories[0].toUpperCase()}
                </div>
                <div className="text-joke">{joke.value}</div>
                <div className="stats-joke">
                  SEE STATS
                  <img className="path-img" src={Path} alt="path" />
                </div>
              </div>
            </React.Fragment>
          ))
        ) : (
          <div>Sorry there is no jokes for the category {category}.</div>
        )}
        {loadMore && "Fetching more jokes..."}
      </div>
    </>
  );
}
