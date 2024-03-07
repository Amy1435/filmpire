import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  toolbar: {
    height: "80px",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "240px",
    // we are showing the tollbar just on destokp or tablet
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0",
      flexWrap: "wrap",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    // diplay none if the device its bigger than a phone
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));
