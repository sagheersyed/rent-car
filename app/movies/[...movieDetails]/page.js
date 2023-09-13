// import { title } from "process";

import Image from "next/image";
import "./movieDetails.css";

const API_KEY = process.env.API_KEY;
const tmdbImageBaseUrl = process.env.TMDBImageBaseUrl;

const fetchAllMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const res = await fetch(
    "https://api.themoviedb.org/3/trending/all/day?language=en-US",
    options
  );
  const data = await res.json();
  return data.results;
};

const page = async ({ params }) => {
  console.log(params);
  const urlTitle = params.movieDetails[0]
    ?.replace(/%3A/g, ":")
    .replace(/\%2B/g, " ");
  console.log(urlTitle);
  const moviesList = await fetchAllMovies();
  const movie = moviesList.find((movie) => {
    console.log("=======================");
    console.log("movie", movie.title == urlTitle || movie.name == urlTitle);
    console.log("=======================");
    return movie.title ? movie.title == urlTitle : movie.name == urlTitle;
  });
  console.log("movie", movie);
  //   console.log(moviesList);

  return (
    <main>
      <section className="movie-details-section">
        <div className="movie-details">
          <div className="movie-title">
            <h1>{urlTitle}</h1>
            <span>{movie?.release_date || movie?.first_air_date}</span>
          </div>
          <div className="movie-details-poster">
            <Image
              src={`${tmdbImageBaseUrl}${movie?.poster_path}`}
              width={800}
              height={800}
              alt={urlTitle}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;

export const generateMetadata = async ({ params }) => {
  const movies = await fetchAllMovies();
  const url = params.movieDetails[0]
    ?.replace(/%3A/g, ":")
    .replace(/\%2B/g, " ");
  const movie = movies.find((movie) => movie.title || movie.name == url);
  //   console.log("generate meta", movie.overview);
  console.log(url);
  return {
    title: url,
    description: movie.overview,
  };
};
