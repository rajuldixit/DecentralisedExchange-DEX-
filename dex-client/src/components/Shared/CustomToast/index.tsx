import { Alert } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import React from "react";

const CustomToast = ({
  vertical,
  horizontal,
  handleClose,
  open,
  message
}: any) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity="success"
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomToast;
