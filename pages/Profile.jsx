import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
}));
const Profile = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h3>Profile</h3>
    </div>
  );
};

export default Profile;
