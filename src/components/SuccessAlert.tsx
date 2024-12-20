import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
  // return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SuccessAlert = ({ open, onClose }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      {/* <Alert onClose={onClose} severity="success">
        Agendamento bem-sucedido!
      </Alert> */}
    </Snackbar>
  );
};

export default SuccessAlert;
