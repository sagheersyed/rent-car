import Script from "next/script";
import Movie from "./movie/page";
import "./movies.css";

const API_KEY = process.env.API_KEY;

async function fetchMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const response = await fetch(
    "https://api.themoviedb.org/3/trending/all/day?language=en-US",
    options
  );
  const data = await response.json();
  return data.results;
}

const page = async () => {
  const movies = await fetchMovies();
  return (
    <main>
      <section className="movies-section">
        <div className="movies-list">
          {movies.map((movie) => {
            return (
              <>
                <Movie movie={movie} moviesList={movies} />
              </>
            );
          })}
        </div>
      </section>
      <Script>
        $('.movies-list').slick(
        {{
          dots: true,
          infinite: false,
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 4,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ],
        }}
        );
      </Script>
    </main>
  );
};

export default page;

export const generateMetadata = ({ params }) => {
  console.log("generate meta data ", params);
  // this function is used to generate dynamic meta information in the page.
  return {
    title: "sagheer",
    description: "sagheer syed biography description",
  };
};
