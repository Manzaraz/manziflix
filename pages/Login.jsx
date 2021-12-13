import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2>Login</h2>
    </div>
  );
};

export default Login;
