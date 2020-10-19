import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";

//Copyright at bottom of Sign In page
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="vr-fundraising-marketing-page.netlify.app">
        SIXR VR Funding
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    //Link to sign in side image
    backgroundImage:
      "url(https://images.unsplash.com/photo-1529094344530-42a0d6a49e8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2200&q=80)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  //Handles form
  const { register, handleSubmit, errors } = useForm();

  // All data is getting sent on Line 88
  // All data is getting sent on Line 88
  // All data is getting sent on Line 88
  // All data is getting sent on Line 88

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            className={classes.form}
            onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}
          >
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              inputRef={register({
                required: true,
                minLength: {
                  value: 3,
                  message: "First name must have at least 3 characters!",
                },
              })}
              id="firstName"
              label="First Name"
              autoFocus
            />
            {errors.firstName && <p>{errors.firstName.message}</p>}
            <TextField
              variant="outlined"
              required
              fullWidth
              inputRef={register({
                required: true,
                minLength: {
                  value: 3,
                  message: "Last name must have at least 3 characters!",
                },
              })}
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lname"
            />
            {errors.firstName && <p>{errors.lastName.message}</p>}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              inputRef={register({
                required: true,
                minLength: {
                  value: 6,
                  message:
                    "Password too weak! Please allow passowrd length to be min 8 characters",
                },
              })}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {errors.password && <p>{errors.password.message}</p>}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
