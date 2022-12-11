import useGetMedia from "../../hooks/useGetMedia";
import "./carousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

SwiperCore.use([Navigation, Pagination]);

const Carousel = (props) => {
  let url;
  if (props.type === "tv" && props.id) {
    url = `https://api.themoviedb.org/3/discover/tv?api_key=f838ee187fe52f9fc1e6048815ba64f7&with_genres=${props.id}`;
  } else if (props.type === "tv" && props.id == null) {
    url =
      "https://api.themoviedb.org/3/tv/popular?api_key=f838ee187fe52f9fc1e6048815ba64f7";
  } else if (props.type === "movie" && props.id) {
    url = `https://api.themoviedb.org/3/discover/movie?api_key=f838ee187fe52f9fc1e6048815ba64f7&with_genres=${props.id}`;
  } else if (props.type === "movie" && props.id == null) {
    url = `https://api.themoviedb.org/3/discover/movie?api_key=f838ee187fe52f9fc1e6048815ba64f7&with_genres=${props.id}`;
  }

  const [data] = useGetMedia(url);

  return (
    <div className="carousel" key={props.id}>
      <p className="carousel-title header2 container">{props.title}</p>
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        loopFillGroupWithBlank={false}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          320:{
            slidesPerView:1,
          },
          768:{
            width:768,
            slidesPerView:2,
          },
          1024:{
            width:1024,
            slidesPerView:5,
          },
          1920:{
            width:1920,
            slidesPerView:8,
          },
        }}
        virtual
      >
        <div className="slides-container">
          {data &&
            data.map((item) => {
              return (
                <SwiperSlide className="carousel-item" key={item.id}>
                  <Link to={`/details?type=${props.type}&media=${item.id}`}>
                    <img
                      className="item-image"
                      src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                      alt={`${item.title} poster`}
                    />
                    <span className="item-gradient"></span>
                    <p className="item-title subtitle2-semibold">
                      {props.type === "movie" ? item.title : item.name}
                    </p>
                  </Link>
                </SwiperSlide>
              );
            })}
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
