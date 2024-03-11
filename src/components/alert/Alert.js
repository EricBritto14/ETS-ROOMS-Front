import React from "react";
import { Snackbar } from "@mui/material";

const Alert = ({ open, onClose, message }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      message={message}
    />
  );
};

export default Alert;
