import { makeStyles, Typography } from "@material-ui/core";
import Header from "../components/Header";
import Plans from "../components/Plans";
import avatar from "../assets/avatar.png";
import { FlixBtn } from "../styled/styledComponents";

import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
  },
  container: {
    minHeight: "100vh",
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  info: {
    width: "80%",
    display: "flex",
    "& img": {
      height: "100px",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  },
  details: {
    width: "100%",
    marginLeft: theme.spacing(3),
    "& h6": {
      backgroundColor: "#aaa",
      padding: theme.spacing(1),
      marginButton: theme.spacing(1),
      fontSize: "18px",
    },
  },
  plans: {
    width: "100%",
  },
  plansText: {
    borderBottom: "1px solid lightgrey",
  },
}));
const Profile = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth);
    navigate("/login");
  };

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.container}>
        <Typography variant="h3">Edit Profile</Typography>
        <div className={classes.info}>
          <img src={avatar} alt="avatar" />
          <div className={classes.details}>
            <div className={classes.plans}>
              <Typography variant="h6">{auth.currentUser.email}</Typography>
              <Typography
                variant="h5"
                gutterBottom
                className={classes.plansText}
              >
                Plans
              </Typography>
              <Plans cost={3.99}>Manziflix Basic</Plans>
              <Plans cost={6.99}>Manziflix Standard</Plans>
              <Plans cost={9.99} color="gray" wide="medium">
                Manziflix Premium
              </Plans>
              <FlixBtn onClick={handleSignOut} wide="fullWith">
                Sign Out
              </FlixBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
