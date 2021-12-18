import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles, Typography } from "@material-ui/core";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../firebase";

import { FlixBtn, FlixInput } from "../styled/styledComponents";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "350px",
    width: "20rem",
    height: "25rem",
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  form: {
    width: "80%",
  },
  email: {
    marginBottom: theme.spacing(2),
  },
  password: {
    marginBottom: theme.spacing(4),
  },
  signupLink: {
    cursor: "pointer",
    color: "#fff",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const SingUp = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        // console.log(user);
        navigate("/");
      })
      .catch((err) => {
        const errMessage = err.message;
        console.log(`Error ${errMessage}`);
        alert(`Error de autenticación: ${errMessage}`);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //  Signed in
        // const user = userCredential.user;
        // console.log(user);
        navigate("/");
      })
      .catch((err) => {
        const errMessage = err.message;
        console.log(`Error: ${errMessage}`);
        alert(`Error de autenticación: ${errMessage}`);
      });
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5" align="left">
        Sing In
      </Typography>
      <form className={classes.form}>
        <FlixInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          className={classes.email}
        />
        <FlixInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          className={classes.password}
        />
        <FlixBtn onClick={handleSignIn} type="submit" wide="medium" radius>
          Sign In
        </FlixBtn>
        <Typography variant="subtitle2">
          New to Manziflix?
          <span className={classes.signupLink} onClick={handleRegister}>
            Sign Up Now.
          </span>
        </Typography>
      </form>
    </div>
  );
};

export default SingUp;
