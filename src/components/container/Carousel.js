import Carousel from "../../assets/Carousel.png";
import Search from "../../assets/search.png";
export default function Container() {
  return (
    <>
      <div className="container">
        <img src={Carousel} alt="Snow" style={{ width: "100%" }} />
        <div className="centered">
          <h1 className="main-title">The Joke Bible</h1>
          <h2 className="title">Daily Laughs for you and yours</h2>
          <form className="search-container" action="action_page.php">
            <input
              className="search-text"
              type="text"
              placeholder="How can we make you laugh today?"
              name="search"
            />
            <img className="search-img" src={Search} alt="search" />
          </form>
        </div>
      </div>
    </>
  );
}
