import { Button, Box, Typography } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";

import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user);

  const logOut = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  const favoriteMovies = [];

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
      {!favoriteMovies.length ? (
        <Typography variant="h5">Add favorites or watchlist some movies to see them here!</Typography>
      ) : (
        <Box>FAVORITE MOVIES</Box>
      )}
    </Box>
  );
};

export default Profile;
