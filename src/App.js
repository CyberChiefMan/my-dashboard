import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
//import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { Grid } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import classNames from "classnames";
//import PropTypes from "prop-types";
const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  card: {
    maxWidth: 345
  },
  margin: {
    margin: theme.spacing.unit
  },
  media: {
    height: 140
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  },
  bg: {
    backgroundColor: "red",
    margin: 10,
    width: 90,
    height: 90,
    textAlign: "center"
  },
  cardMargin: {
    marginTop: 200,
    textAlign: "center"
  }
});
class LoginPageMudal extends React.Component {
  state = {
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid
          container
          className={classes.cardMargin}
          justify="center"
          alignItems="center"
          alignContent="center"
        >
          <Card className={classes.card}>
            <CardMedia>
              <Avatar
                justify="center"
                alignContent="center"
                alignItems="center"
                alt="Avatar Logo"
                src="/logo.svg"
                className={classes.bg}
              />
            </CardMedia>
            <CardContent dir="rtl">
              <Typography gutterBottom variant="h5" component="h2">
                تذکرات:
              </Typography>
              <Typography component="p">
                کاربران گرامی روزی سه لیوان شیر فراموش نشود
              </Typography>
            </CardContent>
            <CardActions>
              <form>
                <TextField
                  required
                  id="standard-required"
                  label="نام کاربری"
                  defaultValue=""
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-adornment-password"
                  className={classNames(classes.margin, classes.textField)}
                  variant="outlined"
                  type={this.state.showPassword ? "text" : "password"}
                  label="رمز عبور"
                  value={this.state.password}
                  onChange={this.handleChange("password")}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={this.handleClickShowPassword}
                        >
                          {this.state.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </form>
            </CardActions>

            <Button size="large" color="primary">
              ورود
            </Button>
            {/* <Button size="small" color="primary">
            Learn More
          </Button> */}
          </Card>
        </Grid>
      </div>
    );
  }
}
LoginPageMudal.propTypes = {
  classes: PropTypes.object.isRequired
};
// ImageAvatars.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withStyles(styles)(LoginPageMudal);
