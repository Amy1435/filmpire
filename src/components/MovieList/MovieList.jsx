import React from "react";
import { Grid } from "@mui/material";
import Movie from "../Movie/Movie";
import useStyles from "./styles";

const MovieList = ({ movies, numbeOfMovies, excudeFirst }) => {
  const classes = useStyles();
  const startFrom = excudeFirst ? 1 : 0;
  return (
    <Grid container className={movies.results.length >= 6 ? classes.moviesContainer : classes.smallMoviesContainer}>
      {movies.results.slice(startFrom, numbeOfMovies).map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default MovieList;
