import Link from "next/link";
import React from "react";
import "./movie.css";
import Image from "next/image";
import { Roboto } from "next/font/google";
const tmdbImageBaseUrl = "http://image.tmdb.org/t/p/w500";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const Movie = ({ movie, moviesList }) => {
  console.log(moviesList);
  const urlTitle = movie.title
    ? movie.title.replace(/\s+/g, "+")
    : movie.name.replace(/\s+/g, "+");
  // console.log(title);
  return (
    <div className="movie-main">
      <Link href={`/movies/${urlTitle}`}>
        <div className="movie-img">
          <Image
            src={`${tmdbImageBaseUrl}${movie.backdrop_path}`}
            width={300}
            height={300}
            alt={!movie.title ? movie.name : movie.title}
          />
        </div>
        <div className="movie-content">
          <span className={roboto.className}>
            {!movie.title ? movie.name : movie.title}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Movie;

export const generateMetadata = ({ params }) => {
  console.log("generate meta data ", params);
  return {
    title: "sagheer",
    description: "sagheer syed description",
  };
};
