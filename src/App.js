import { BrowserRouter, Routes, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Paypal from "./pages/Paypal";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#f5f5f5",
    backgroundColor: "#000",
    minHeight: "100vh",
  },
}));

function App() {
  const user = "null";
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BrowserRouter>
        {!user ? (
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/checkout" element={<Paypal />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
