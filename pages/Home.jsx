import { makeStyles } from "@material-ui/core";
import Header from "../components/Header";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <h2>Home</h2>
    </div>
  );
};

export default Home;
