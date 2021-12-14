import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <h2>header</h2>
    </header>
  );
};

export default Header;
