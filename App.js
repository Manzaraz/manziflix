import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Counter } from "./features/counter/Counter";
// import classes from "./App.module.scss";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SingUp from "./pages/SingUp";
import Profile from "./pages/Profile";
import Paypal from "./pages/Paypal";
import styled from "styled-components";

const useStyles = styled((theme) => ({
  root: {
    backgroundColor: "#111",
    minHeight: "100vh",
  },
}));

function App() {
  const user = null;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BrowserRouter>
        {!user ? (
          <Routes>
            <Route path="/login" element={<Login />} />
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
