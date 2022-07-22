import { useState, useEffect } from "react";

const useInfiniteScroll = (callback) => {
  debugger;
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback(() => {
      console.log("called back");
    });
  }, [isFetching]);

  function handleScroll() {
    if (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight
    ) {
      setIsFetching(true);
    }
  }

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
