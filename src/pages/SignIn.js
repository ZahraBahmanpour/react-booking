import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { BiLockAlt } from "react-icons/bi";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import GoogleButton from "react-google-button";
import Copyright from "../components/Copyright";
import { UseAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import { useState } from "react";
import { handleFirebaseAuthErrors } from "../utils/utils";

const SignIn = () => {
  const [error, setError] = useState("");
  const { signIn, googleSignIn } = UseAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      await signIn(data.get("email"), data.get("password"));
      navigate("/");
    } catch (e) {
      setError(handleFirebaseAuthErrors(e.code));
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (e) {
      setError(handleFirebaseAuthErrors(e.code));
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <BiLockAlt />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {error && <Alert severity="error">{error}</Alert>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <GoogleButton
        className="g-btn"
        type="dark"
        style={{ margin: "20px auto" }}
        onClick={handleGoogleSignIn}
      />
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

export default SignIn;
