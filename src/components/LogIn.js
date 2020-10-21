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
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import InputAdornment from "@material-ui/core/InputAdornment";
import LockIcon from "@material-ui/icons/Lock";
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
    margin: theme.spacing(15, 8),
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
  //fixes the spacing on first and last name inputs
  fix: {
    paddingBottom: "3%",
  },
}));

export default function LogIn() {
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
              className={classes.fix}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineIcon />
                  </InputAdornment>
                ),
              }}
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              placeholder="First Name *"
              inputRef={register({
                pattern: /^[A-Za-z]+$/i,
                required: true,
                minLength: {
                  value: 3,
                },
                maxLength: {
                  value: 12,
                },
              })}
              id="firstName"
              autoFocus
            />
            {errors.firstName?.type === "minLength" && (
              <span>First name must have at least 3 characters!</span>
            )}
            {errors.firstName?.type === "maxLength" && (
              <span>First name max characters 12</span>
            )}
            {errors.firstName?.type === "pattern" && <span>A-Z only!</span>}
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              required
              placeholder="Last Name *"
              fullWidth
              inputRef={register({
                pattern: /^[A-Za-z]+$/i,
                required: true,
                minLength: {
                  value: 3,
                },
                maxLength: {
                  value: 12,
                },
              })}
              id="lastName"
              name="lastName"
              autoComplete="lname"
            />
            {errors.lastName?.type === "minLength" && (
              <span>Last name must have at least 3 characters!</span>
            )}
            {errors.lastName?.type === "maxLength" && (
              <span>Last name max characters 12</span>
            )}
            {errors.lastName?.type === "pattern" && <span>A-Z only!</span>}
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              margin="normal"
              required
              placeholder="Password *"
              fullWidth
              inputRef={register({
                required: true,
                minLength: {
                  value: 6,
                },
                maxLength: {
                  value: 15,
                },
              })}
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {errors.password?.type === "minLength" && (
              <span>Password must have at least 6 characters!</span>
            )}
            {errors.password?.type === "maxLength" && (
              <span>Password max characters 15</span>
            )}

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
                <Link href="/register" variant="body2">
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
