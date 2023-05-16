import React, { useState } from "react";
import Card from "./Card";
function Search() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const search = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=f909576c09cbf6b188b5bd9540bc7cc9&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={search}>
        <label htmlFor="query" className="label">
          Search a movie
        </label>
        <input
          type="text"
          placeholder="look for a movie"
          id="query"
          className="input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button">Search</button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <Card movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
}

export default Search;
