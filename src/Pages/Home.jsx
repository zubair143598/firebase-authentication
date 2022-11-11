import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "@mui/system";
import Box from "@mui/material/Box";
import { Button as MButton } from "@mui/material";
import { sendEmailVerification,sendPasswordResetEmail  } from "firebase/auth";
import TextField from "@mui/material/TextField";

const Home = ({email,setEmail }) => {
  const navigate = useNavigate();

  const varification = () => {
    const auth = getAuth();
    sendEmailVerification(auth.currentUser).then(() => {
      console.log("done");
      // Email verification sent!
      // ...
    });
  };

  const auth = getAuth();
  const out = () => {
    signOut(auth)
      .then(() => {
        toast.info("Sign-out successful.");
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const reset = () => {
    const auth = getAuth();
    console.log({email})
    sendPasswordResetEmail(auth, email)
      .then((res) => {
        console.log(res)
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <Container style={{ width: "600px", margin: "5rem auto" }}>
      <Box>
        <h2>Home</h2>
        {/* <button onClick={logout}>Logout</button> */}

        <MButton onClick={out} variant="contained">
          SignOut
        </MButton>
        <br />
        <MButton onClick={varification} variant="contained">
          Varification
        </MButton>
        <br /><br />
        <TextField
          id="email"
          label="Email"
          value={email}
          type="email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <MButton onClick={reset} variant="contained">
          reset
        </MButton>
        <ToastContainer />
      </Box>
    </Container>
  );
};

export default Home;
