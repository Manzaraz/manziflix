import { makeStyles } from "@material-ui/core";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Row from "../components/Row";
import requests from "../Requests";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Banner />
      <Row
        title="Originales de Netflix"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Los más vistos" fetchUrl={requests.fetchTopRated} />
      <Row title="Acción" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedia" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Terror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Románticas" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentales" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default Home;
