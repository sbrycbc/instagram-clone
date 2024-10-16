import React from 'react';
import { Button, TextField } from "@mui/material";
import "./login.css";


const Login = () => {
  return (
    <div className="auth-page">
      <h1>Welcome to Social Media App</h1>
      <form className="form">
        <h2>Login</h2>
        <div className="form-input">
          <TextField required type="email" label="Email" variant="outlined" />
        </div>
        <div className="form-input">
          <TextField
            required
            type="password"
            label="Password"
            variant="outlined"
          />
        </div>
        <a  className="auth-link" href="/">
          Go to Register
        </a>
        <Button type="submit" variant="contained" color="success">
          Login
        </Button>
      </form>
    </div>
  );
};
export default Login