import React from "react";

function Card({ movie }) {
  return (
    <div className="card" key={movie.id}>
      <img
        className="card--image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + " poster"}
      />
      <div className="card--content">
        <h3 className="card--title">
          <b>{movie.title}</b>
        </h3>
        <p>
          <small>
            <b>RELEASE DATE: {movie.release_date}</b>
          </small>
        </p>
        <p>
          <small>
            <b>RATING: {movie.vote_average}</b>
          </small>
        </p>
        <p className="card--desc">{movie.overview}</p>
      </div>
    </div>
  );
}

export default Card;
