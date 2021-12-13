import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
}));
const SingUp = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2>SingUp</h2>
    </div>
  );
};

export default SingUp;
