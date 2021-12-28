import { makeStyles } from "@material-ui/core";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectPrice } from "../features/PriceSlice";
// import { loadScript } from "@paypal/paypal-js";

const useStyles = makeStyles((theme) => ({
  root: {},
}));
const Paypal = () => {
  const classes = useStyles();
  const price = useSelector(selectPrice);
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Suscripción Manziflix",
                amount: {
                  currency_code: "USD",
                  value: price,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => console.log(err),
      })
      .render(paypal.current);
  }, []);

  return (
    <div className={classes.root} ref={paypal}>
      <h3>Paypal</h3>
    </div>
  );
};

export default Paypal;
