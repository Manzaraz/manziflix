import { Button, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import request from "../Requests";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "440px",
    backgroundPosition: "center",
    color: "#fff",
    display: "flex",
    justifyContent: "left",
    alignItems: "flex-end",
  },
  container: {},
  buttons: {
    "& button": {
      cursor: "pointer",
      color: "#fff",
      fontWeight: 700,
      borderRadius: "5px",
      padding: theme.spacing(1, 4, 1, 4),
      marginRight: "1rem",
      backgroundColor: "rgba(51,51,51,0.5)",
    },
    "& button:hover": {
      color: "#050505",
      backgroundColor: "#e6e6e6",
    },
  },
  description: {
    width: "50vw",
    fontWeight: 200,
    padding: "20px",
  },
  fadeBottom: {
    position: "absolute",
    top: "30vh",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 90,
    backgroundImage:
      "linear-gradient(180deg, transparent, rgba(37,37,37, 0.61), #000)",
  },
}));

const Banner = () => {
  const classes = useStyles();
  const [movie, setMovie] = useState([]);

  const truncate = (string, n) =>
    string?.length > n ? `${string.substr(0, n - 1)}...` : string;

  useEffect(() => {
    const getMovie = async () => {
      let res = await fetch(request.fetchNetflixOriginals),
        json = await res.json(),
        movies = json.results;
      // Tenemos un array de peliculas  en movies. Generamos un número random entre 0 y la longitud del Array, para obtener un idice aleatorio, para luego cargarlo con setMovie y cargarlo en el banner
      const random = Math.floor(Math.random() * movies.length - 1);
      setMovie(movies[random]);
    };
    getMovie();
  }, []);
  // console.log(movie);

  let base_url = "https://image.tmdb.org/t/p/original";

  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
        objectFit: "contain",
        backgroundSize: "cover",
      }}
    >
      <div className={classes.container}>
        <Typography variant="h2" component="h1">
          {movie.name}
        </Typography>
        <div className={classes.buttons}>
          <Button>Play</Button>
          <Button>My List</Button>
        </div>
        <Typography
          style={{ wordWrap: "break-word" }}
          variant="h6"
          className={classes.description}
        >
          {truncate(movie.overview, 155)}
        </Typography>
        <div className={classes.fadeBottom} />
      </div>
    </div>
  );
};

export default Banner;
