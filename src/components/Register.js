import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useForm } from "react-hook-form";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import InputAdornment from "@material-ui/core/InputAdornment";
import LockIcon from "@material-ui/icons/Lock";
//copyright
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
    marginTop: theme.spacing(15),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
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
                fullWidth
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
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutlineIcon />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                placeholder="Last Name *"
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
                fullWidth
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
            </Grid>

            <Grid item xs={12}>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                placeholder="Password *"
                inputRef={register({
                  required: true,
                  minLength: {
                    value: 6,
                  },
                  maxLength: {
                    value: 15,
                  },
                })}
                fullWidth
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
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
