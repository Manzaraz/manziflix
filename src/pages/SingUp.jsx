import { makeStyles, Typography } from "@material-ui/core";
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

  const register = (e) => {};

  return (
    <div className={classes.root}>
      <Typography variant="h5" align="left">
        Sing In
      </Typography>
      <form className={classes.form}>
        <FlixInput placeholder="email" className={classes.email} />
        <FlixInput
          placeholder="password"
          type="password"
          className={classes.password}
        />
        <FlixBtn wide="medium" radius>
          Sign In
        </FlixBtn>
        <Typography variant="subtitle2">
          New to Manziflix?
          <span className={classes.signupLink} onClick={register}>
            Sign Up Now.
          </span>
        </Typography>
      </form>
    </div>
  );
};

export default SingUp;
