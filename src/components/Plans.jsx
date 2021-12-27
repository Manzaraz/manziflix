import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { makeStyles, Typography } from "@material-ui/core";

import { setPrice } from "../features/PriceSlice";
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSuscribe = (cost) => {
    dispatch(setPrice(cost));
    navigate("/checkout");
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.standard} variant="h5">
        {children}
      </Typography>
      <FlixBtn
        onClick={() => {
          handleSuscribe(cost);
        }}
        color={color}
        wide={wide}
      >
        Suscribe
      </FlixBtn>
    </div>
  );
};

export default Plans;
