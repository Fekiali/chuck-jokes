const endPoint = "https://api.chucknorris.io/jokes";
export default {
  GetJokesCategoryList: () => {
    const url = "/categories";
    return fetch(endPoint + url)
      .then((res) => {
        return res.json().then((data) => data);
      })
      .catch((err) => console.log(err));
  },
  GetJokes: (query = "all") => {
    const url = `/search?query=${query}`;
    return fetch(endPoint + url)
      .then((res) => {
        return res.json().then((data) => data);
      })
      .catch((err) => console.log(err));
  },
};
