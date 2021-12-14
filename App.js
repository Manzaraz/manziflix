import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Counter } from "./features/counter/Counter";
// import classes from "./App.module.scss";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SingUp from "./pages/SingUp";
import Profile from "./pages/Profile";
import Paypal from "./pages/Paypal";
import { makeStyles } from "@material-ui/core";
import Header from "./components/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#f5f5f5",
    backgroundColor: "#000",
    minHeight: "100vh",
  },
}));

function App() {
  const user = "Chris";
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Header /> */}
      <BrowserRouter>
        {!user ? (
          // <Login />
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
