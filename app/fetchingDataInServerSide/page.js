const moviesService = async () => {
  const movieResponse = await fetch("https://dummyjson.com/products");
  console.log(movieResponse);
  const movieData = await movieResponse.json();
  // console.log(movieData);
  return movieData.products;
};

const obj = {
  name: "sagheer",
  age: 20,
};

function objData(obj) {
  console.log(obj?.name);
}

objData(obj);

// console.log(obj);

const Page = async () => {
  const movieList = await moviesService();
  // console.log(movieList);
  return (
    <div>
      {movieList.map((movie) => (
        <div>{movie.description}</div>
      ))}
    </div>
  );
};

export default Page;
