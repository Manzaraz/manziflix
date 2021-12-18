import { useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";

import SignUp from "../pages/SingUp";
import logo from "../assets/manziflixLogo.png";
import bgimage from "../assets/moviebg.png";
import { FlixBtn, FlixInput } from "../styled/styledComponents";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "100vh",
    backgroundImage: `url(${bgimage})`,
    objectFit: "contain",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    position: "fixed",
    top: 20,
    left: 20,
    height: "50px",
    cursor: "pointer",
  },
  session: {
    position: "fixed",
    zIndex: 15,
    right: 20,
    top: 20,
  },
  info: {
    color: "#fff",
    zIndex: 15,
    textAlign: "center",
    "& h4": {
      fontWeight: 800,
    },
    "& h5": {
      fontWeight: 400,
    },
  },
  inputBlock: {
    alignItems: "center",
  },
}));

const Login = () => {
  const classes = useStyles();
  const [signIn, setSignIn] = useState(false);

  return (
    <div className={classes.root}>
      <img src={logo} alt="logo" className={classes.logo} />
      <FlixBtn className={classes.session}>Iniciar sesión</FlixBtn>
      <div className={classes.info}>
        {!signIn ? (
          <SignUp />
        ) : (
          <>
            <Typography variant="h4" gutterBottom>
              Unlimited Films, TV programmes and more.
            </Typography>
            <Typography variant="h5">
              Watch anywhere. Cancel at any time.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Ready to watch? Enter your email to create or restart your
              membership.
            </Typography>
            <div className={classes.inputBlock}>
              <FlixInput placeholder="Email address" />
              <FlixBtn>GET STARTED</FlixBtn>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
