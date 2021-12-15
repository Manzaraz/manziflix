import { makeStyles, Typography } from "@material-ui/core";
import { FlixBtn } from "../styled/styledComponents";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& button": {
      marginBottom: theme.spacing(2),
    },
  },
  standard: {
    fontSize: "1.2rem",
  },
}));

const Plans = ({ cost, children, color, wide }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.standard} variant="h5">
        {children}
      </Typography>
      <FlixBtn cost={cost} color={color} wide={wide} radius>
        Suscribe
      </FlixBtn>
    </div>
  );
};

export default Plans;
