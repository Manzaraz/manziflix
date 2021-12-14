import { makeStyles } from "@material-ui/core";
import Header from "../components/Header";

const useStyles = makeStyles((theme) => ({
  root: {},
}));
const Profile = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <h3>Profile</h3>
    </div>
  );
};

export default Profile;
