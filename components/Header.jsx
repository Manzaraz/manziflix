import {
  AppBar,
  Avatar,
  IconButton,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/manziflixLogo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#020202",
    top: 0,
    left: 0,
    right: 0,
  },
  logo: {
    height: "50px",
    cursor: "pointer",
  },
  transparent: {
    backgroundColor: "transparent",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

const Header = () => {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  let navigate = useNavigate();

  const hideHeader = () => {
    window.scrollY ? setShow(true) : setShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", hideHeader);
    return () => window.removeEventListener("scroll", hideHeader);
  }, []);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      className={`${classes.root} ${show && classes.transparent}`}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton onClick={() => navigate("/")}>
          <img src={logo} alt="Manziflix" className={classes.logo} />
        </IconButton>
        <Avatar
          variant="square"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/profile")}
        />
        {/*Equivale a:
         <Link to="/">
          <img src={logo} alt="Manziflix" className={classes.logo} />
        </Link>
        <Link to="/profile">
          <Avatar variant="square" style={{ cursor: "pointer" }} />
        </Link> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
