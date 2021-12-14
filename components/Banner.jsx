import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h4>Banner</h4>
    </div>
  );
};

export default Banner;
