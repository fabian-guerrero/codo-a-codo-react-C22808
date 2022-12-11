import "./home.scss";
import { Link } from "react-router-dom";
import homeHero from "../../assets/images/home-hero-background.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home-hero">
        <img src={homeHero} alt="Homepage hero" />
        <div className="container">
          <div className="copy-wrapper">
            <p className="home-title header1">
              Discover Unlimited Movies, Drama, Music Video and More Content.
            </p>
            <p className="home-subtitle subtitle2-regular">
              Start exploring <Link to="/movies">movies</Link> and <Link to="/series">TV shows</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
