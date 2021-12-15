import { makeStyles } from "@material-ui/core";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Row from "../components/Row";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Banner />
      <Row />
    </div>
  );
};

export default Home;
