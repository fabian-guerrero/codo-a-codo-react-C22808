import useMedia from "../../hooks/useMedia";
import "./details.scss";

function Details() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const itemId = urlParams.get("media");
  const itemType = urlParams.get("type");

  let url;
  if (itemType === "tv") {
    url = `https://api.themoviedb.org/3/tv/${itemId}?api_key=f838ee187fe52f9fc1e6048815ba64f7`;
  } else {
    url = `https://api.themoviedb.org/3/movie/${itemId}?api_key=f838ee187fe52f9fc1e6048815ba64f7`;
  }

  const [data] = useMedia(url);

  return (
    <div className="details container">
      <img
        className="details-image"
        src={`https://image.tmdb.org/t/p/original${data && data.poster_path}`}
        alt={`${data && data.title} poster`}
      />
      <div className="details-wrapper">
        <p className="title header3">
          {itemType === "movie"
            ? data && data.original_title
            : data && data.original_name}
        </p>
        <p className="description paragraph1">{data && data.overview}</p>
      </div>
    </div>
  );
}

export default Details;
