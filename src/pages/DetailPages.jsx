import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "./../utils/api";
import Loader from "./../components/Loader";
import { imgUrl } from "./../utils/constants";
import DetailDisplay from "../components/DetailDisplay";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ActorCard from "../components/ActorCard";

const DetailPages = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const params = {
      append_to_response: "credits",
    };
    api
      .get(`/movie/${id}`, { params })
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {!movie ? (
        <Loader />
      ) : (
        <div>
          <section className="relative h-[20vh]">
            <img
              className="object-cover h-full w-full"
              src={imgUrl + movie.backdrop_path}
            />
            <h2 className="absolute bg-black inset-0 grid place-items-center bg-opacity-50 text-3xl font-semibold">
              {movie.title}
            </h2>
          </section>
          <section className="my-10 grid grid-cols-1 md:grid-cols-2">
            <div>
              <DetailDisplay title="kategoriler" data={movie.genres} />
              <DetailDisplay
                title="konuşulan diller"
                data={movie.spoken_languages}
              />
              <DetailDisplay
                title="yapımcı şirketler"
                data={movie.production_companies}
              />
              <DetailDisplay
                title="yapımcı ülkeler"
                data={movie.production_countries}
              />
            </div>
            <div>
              <p>{movie.overview}</p>
            </div>
          </section>
          <section>
            <Splide options={{ autoWidth: true, gap: "10px", pagination: false }}>
              {movie.credits.cast.map((actor,i)=>(
                <SplideSlide key={i}>
                  <ActorCard actor={actor}  />
                </SplideSlide>
              ))}
            </Splide>
          </section>
        </div>
      )}
    </div>
  );
};

export default DetailPages;
