import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
}));
const Row = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h4>Row</h4>
    </div>
  );
};

export default Row;
