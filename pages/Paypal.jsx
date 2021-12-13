import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
}));
const Paypal = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h3>Paypal</h3>
    </div>
  );
};

export default Paypal;
