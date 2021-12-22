import { makeStyles, Typography } from "@material-ui/core";
// import axios from "axios";

import React, { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    marginLeft: theme.spacing(4),
  },
  posters: {
    display: "flex",
    overflowY: "hidden",
    overflowX: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  poster: {
    maxHeight: "12rem",
    objectFit: "contain",
    marginRight: theme.spacing(1),
    transition: "transform 450ms",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  posterLarge: {
    maxHeight: "15rem",
    "&:hover": {
      transform: "scale(1.15)",
    },
  },
}));

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);

  let base_url = "https://image.tmdb.org/t/p/original/";

  // using async fetch
  useEffect(() => {
    const getMovies = async () => {
      let res = await fetch(fetchUrl),
        json = await res.json();
      // console.log(json.results);

      json.results.forEach(async (movie) => {
        // console.log(movie);
        setMovies((movies) => [...movies, movie]);
      });
    };
    getMovies(fetchUrl);
  }, [fetchUrl]);

  return (
    <div className={classes.root}>
      <Typography variant="h4">{title}</Typography>
      <div className={classes.posters}>
        {movies.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          movies.map(
            (movie) =>
              ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                <img
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie?.backdrop_path
                  }`}
                  alt={movie.title}
                  key={movie.id}
                  className={`${classes.poster} ${
                    isLargeRow && classes.posterLarge
                  }`}
                />
              )
          )
        )}
      </div>
    </div>
  );
};

export default Row;
