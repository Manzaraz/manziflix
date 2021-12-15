import { Button, makeStyles, Typography } from "@material-ui/core";
import heroBanner from "../assets/banner.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${heroBanner})`,
    position: "relative",
    height: "440px",
    objectFit: "contain",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    display: "flex",
    justifyContent: "left",
    alignItems: "flex-end",
  },
  container: {},
  buttons: {
    padding: theme.spacing(1),
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

  const truncate = (string, n) =>
    string?.length > n ? `${string.substr(0, n - 1)}...` : string;

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography variant="h2" component="h1">
          Movie Title
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
          {truncate(
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab dolorum error eligendi ipsa voluptatibus facere laudantium, quae iusto nesciunt voluptas qui necessitatibus deserunt tenetur vero excepturi in accusantium fugiat. Debitis.",
            155
          )}
        </Typography>
        <div className={classes.fadeBottom} />
      </div>
    </div>
  );
};

export default Banner;
