import React from "react";
import { Typography, Button } from "@mui/material";
import useStyles from "./style";

const Pagination = ({ currentPage, setPage, totalPages }) => {
  const classes = useStyles();
  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className={classes.container}>
      <Button onClick={handlePrev} className={classes.button} variant="contained" color="primary" type="button">
        Prev
      </Button>
      <Typography className={classes.pageNumber} variant="h4">
        {currentPage}
      </Typography>
      <Button onClick={handleNext} className={classes.button} variant="contained" color="primary" type="button">
        Next
      </Button>
    </div>
  );
};

export default Pagination;
