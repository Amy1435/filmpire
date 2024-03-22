import React, { useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { Typography, Button, ButtonGroup, Grid, Box, CircularProgress } from "@mui/material";
import { Movie as MovieIcon, ArrowBack } from "@mui/icons-material";
import { useGetActorQuery, useGetActorWorksQuery } from "../../services/TMDB";
import useStyles from "./style";
import MovieList from "../MovieList/MovieList";
import Pagination from "../Pagination/Pagination";

const Actors = () => {
  const { id } = useParams();
  const { data, error, isFetching } = useGetActorQuery(id);
  console.log(data);
  const [page, setPage] = useState(1);
  const { data: actorWork, isFetching: isActorWorkFetching } = useGetActorWorksQuery({ id, page });
  console.log(actorWork);

  const classes = useStyles();
  const history = useHistory();

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }
  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link to="/">Something has gone wrong - Go back </Link>
      </Box>
    );
  }

  return (
    <Grid container spacing={3}>
      <Grid item xl={4} lg={5}>
        <img src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`} className={classes.image} alt={data.name} />
      </Grid>

      <Grid item xl={8} lg={7} style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
        <Typography variant="h2" gutterBottom>
          {data?.name}
        </Typography>
        <Typography variant="h5" gutterBottom>
          Born: {data?.birthday}
        </Typography>
        <Typography variant="body1" align="justify" paragraph>
          {data?.biography ? data?.biography : "Sorry, No biography yet"}
        </Typography>
        <Box marginTop="2rem" display="flex" justifyContent="space-around">
          <Button
            variant="contained"
            color="primary"
            target="blank"
            rel="nooper noreferrer"
            href={`https://www.imdb.com/name/${data?.imdb_id}`}
            endIcon={<MovieIcon />}
          >
            IMDB
          </Button>
          <Button endIcon={<ArrowBack />} onClick={() => history.goBack()} color="primary" variant="outlined">
            Back
          </Button>
        </Box>
      </Grid>
      <Box margin="2rem 0">
        <Typography variant="h3" gutterBottom align="center">
          Movies
        </Typography>
        {actorWork ? (
          <MovieList movies={actorWork} numbeOfMovies={12} />
        ) : (
          <Box align="center">Sorry, no recommendations available</Box>
        )}
        <Pagination currentPage={page} setPage={setPage} totalPages={actorWork?.total_pages} />
      </Box>
    </Grid>
  );
};

export default Actors;
