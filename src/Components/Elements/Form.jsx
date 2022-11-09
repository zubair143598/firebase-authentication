import React from "react";

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const Form = () => {
  return (
    <div className="form-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
          <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Small"
        variant="filled"
        size="small"
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Normal"
        variant="filled"
      />
    </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
