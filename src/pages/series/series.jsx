import Carousel from "../../components/carousel/carousel";
import Hero from "../../components/hero/hero";
import useGetGenres from "../../hooks/useGetGenres";
import "./series.scss";

import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Virtual, Navigation, Pagination]);

function Series() {
  const [genres] = useGetGenres(
    "https://api.themoviedb.org/3/genre/tv/list?api_key=f838ee187fe52f9fc1e6048815ba64f7&language=en-US"
  );

  return (
    <div className="series">
      <Hero type="tv" />
      <Carousel title="Most Populars" type="tv" />
      {genres &&
        genres.slice(0, 5).map((item) => {
          return (
            <>
              <Carousel title={item.name} id={item.id} type="tv" />
            </>
          );
        })}
    </div>
  );
}

export default Series;
