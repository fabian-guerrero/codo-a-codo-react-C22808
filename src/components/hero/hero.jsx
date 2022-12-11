import useMedia from "../../hooks/useMedia";
import useMostPopular from "../../hooks/useMostPopular";
import "./hero.scss";

const Hero = (props) => {
  let dataUrl;
  if (props.type === "tv") {
    dataUrl =
      "https://api.themoviedb.org/3/tv/popular?api_key=f838ee187fe52f9fc1e6048815ba64f7";
  } else {
    dataUrl =
      "https://api.themoviedb.org/3/movie/popular?api_key=f838ee187fe52f9fc1e6048815ba64f7";
  }

  const [data] = useMostPopular(dataUrl);

  let heroUrl;
  if (props.type === "tv") {
    heroUrl = `https://api.themoviedb.org/3/tv/${data}?api_key=f838ee187fe52f9fc1e6048815ba64f7`;
  } else if (props.type === "movie") {
    heroUrl = `https://api.themoviedb.org/3/movie/${data}?api_key=f838ee187fe52f9fc1e6048815ba64f7`;
  }

  const [heroData] = useMedia(heroUrl);

  return (
    <div className="hero container">
      <div className="hero-wrapper">
        <img
          className="hero-image"
          src={`https://image.tmdb.org/t/p/original${
            heroData && heroData.backdrop_path
          }`}
          alt={`${heroData && heroData.title} poster`}
        />
        <span className="hero-gradient"></span>
        <div className="hero-content">
          <p className="title header3">
            {props.type === "movie"
              ? heroData && heroData.original_title
              : heroData && heroData.original_name}
          </p>
          <p className="paragraph2">{heroData && heroData.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
