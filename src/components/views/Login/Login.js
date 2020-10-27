import React from 'react';
import styles from './Login.module.scss';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Login = () => (
  <Paper elevation={6} className={styles.component}>
    <Typography variant="h5" className={styles.title}>
      Sign in
    </Typography >
    <form className={styles.formContainer}>
      <TextField className={styles.textField} id="standard-basic" label="Login" fullWidth/>
      <TextField className={styles.textField} id="standard-password-input" label="Password" type="password" fullWidth/>
      <Button className={styles.button} type="submit" variant="contained" color="primary" href="/panel">Login</Button>
    </form>
  </Paper>
);

export default Login;