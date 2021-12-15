import { makeStyles } from "@material-ui/core";
import Header from "../components/Header";
import Banner from "../components/Banner";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Banner />
      <h2>Home</h2>
    </div>
  );
};

export default Home;
