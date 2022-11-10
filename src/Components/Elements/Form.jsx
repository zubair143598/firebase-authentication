import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "./Button";
import { Container } from "@mui/system";
const Form = ({ title, setEmail, setPassword, handleAction }) => {
  return (
    <Container style={{ maxWidth: "600px", margin: "5rem auto" }}>
      <div>
        <h2>{title} Form</h2>
      </div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Button title={title } handleAction={handleAction} />
      </Box>
    </Container>
  );
};

export default Form;
