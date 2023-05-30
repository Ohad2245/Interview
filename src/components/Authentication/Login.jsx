import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import { CryptoState } from "../../CryptoContext";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login({ handleClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {setAlert} = CryptoState();

  const handleSubmit = async () => {
    if (!email || !password) {
      setAlert({
        open: true,
        message: "Please fill all the Fields ",
        type: "error",
      });
      return;
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setAlert({
        open: true,
        message: `Login is Successful . Welcome ${result.user.email}`,
        type: "success",
      });
      handleClose();
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
      return;
    }
  }
  return (
    <Box
      p={3}
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      {/* Email */}
      <TextField
        variant="outlined"
        type="email"
        label="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />

      {/*  Password */}
      <TextField
        variant="outlined"
        type="password"
        label="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />

      {/* Confirm Password */}
     
      <Button
      variant='contained'
      size='large'
      style={{backgroundColor:'#EEBC1D'}}
      onClick={handleSubmit}
      >
       Login
      </Button>
    </Box>
  );
}

export default Login;
