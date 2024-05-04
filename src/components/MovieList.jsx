import { useEffect, useState } from "react";
import api from "../utils/api";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { imgUrl } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieList = ({ genre }) => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    api
      .get(`/discover/movie?with_genres=${genre.id}`)
      .then((res) => setMovie(res.data.results))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="my-10">
      <h1 className="text-3xl font-semibold mb-3">{genre.name}</h1>
      <Splide 
        options={{ autoWidth: true, gap: "10px", pagination: true }}
      >
        {movie.map((movie) => (
          <SplideSlide>
            <Link to={`/movie/${movie.id}`}>
              <img
                className="max-w-[300px] h-full cursor-pointer rounded"
                src={imgUrl + movie.poster_path}
              />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MovieList;
