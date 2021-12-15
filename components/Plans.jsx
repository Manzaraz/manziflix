import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Plans = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h4>Plans</h4>
    </div>
  );
};

export default Plans;
