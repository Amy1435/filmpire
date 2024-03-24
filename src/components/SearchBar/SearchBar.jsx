import React, { useState, useEffect } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { searchMovie } from "../../features/currentGenreOrCategory";

import useStyles from "./style";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();

  // SEARCH MOVIE
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      dispatch(searchMovie(query));
    }
  };

  // SEARCH BAR JUST ON THE /
  if (location.path !== "/") return null;
  return (
    <div className={classes.searchContainer}>
      {/* // input */}
      <TextField
        onKeyDown={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        // prop that you wanna pass to the input
        InputProps={{
          className: classes.input,
          // adds an icon at the start of the input
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchBar;
