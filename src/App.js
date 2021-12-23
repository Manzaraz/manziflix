import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Paypal from "./pages/Paypal";

import { auth } from "./firebase";

import { useDispatch } from "react-redux";
import { login, logout /* selectUser */ } from "./features/UserSlice";
import { onAuthStateChanged } from "firebase/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#f5f5f5",
    backgroundColor: "#000",
    minHeight: "100vh",
  },
}));

function App() {
  // const user = null;
  // const user = useSelector(selectUser);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    // effect;
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          })
        );
      } else {
        dispatch(logout);
      }
    });
    return unSubscribe;
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/checkout" element={<Paypal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
