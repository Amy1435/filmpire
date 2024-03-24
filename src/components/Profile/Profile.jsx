import { Button, Box, Typography } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useGetListQuery } from "../../services/TMDB";
import RatedCards from "../RatedCards/RatedCards";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  // data movie favorites
  const { data: favoriteMovies, refetch: refetchFavorites } = useGetListQuery({
    listName: "favorite/movies",
    accountId: user.id,
    sessionId: localStorage.getItem("session_id"),
    page: 1,
  });

  // data movie watchList
  const { data: watchListMovies, refetch: refetchWatchlisted } = useGetListQuery({
    listName: "watchlist/movies",
    accountId: user.id,
    sessionId: localStorage.getItem("session_id"),
    page: 1,
  });

  useEffect(() => {
    refetchFavorites();
    refetchWatchlisted();
  });

  const logOut = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          My Profile
        </Typography>
        <Button color="inherit" onClick={logOut}>
          LogOut &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies?.results?.length && !watchListMovies?.results?.length ? (
        <Typography variant="h5">Add favorites or watchlist some movies to see them here!</Typography>
      ) : (
        <Box>
          <RatedCards title="Favorite Movies" data={favoriteMovies} />
          <RatedCards title=" Watchlist Movies" data={watchListMovies} />
        </Box>
      )}
    </Box>
  );
};

export default Profile;
