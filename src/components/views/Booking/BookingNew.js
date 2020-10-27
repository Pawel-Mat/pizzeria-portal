import React from 'react';
import styles from './Booking.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const BookingNew = () => (
  <Paper className={styles.component}>
    <Typography variant="h5" className={styles.title}>
      New booking
    </Typography>
    <form>
      <TextField className={styles.textField} 
        id="standard-basic" 
        label="Table" type="number" 
        InputLabelProps={{shrink: false}}
        required/>
      <TextField className={styles.textField}
        id="date"
        label="Date"
        type="date"
        defaultValue="2020-26-10"
        InputLabelProps={{shrink: false}}
        required
      />
      <TextField className={styles.textField}
        id="time"
        label="Time"
        type="time"
        defaultValue="12:00"
        InputLabelProps={{shrink: false}}
        inputProps={{step: 1800 }}
        required
      />
      <TextField className={styles.textField} 
        id="standard-basic" 
        label="Hours" 
        type="number" 
        InputLabelProps={{shrink: false}}
        required/>
      <TextField className={styles.textField} 
        id="standard-basic" 
        label="People" 
        type="number" 
        InputLabelProps={{shrink: false}}
        required/>
      <TextField className={styles.textField} 
        id="standard-basic" 
        label="Phone" 
        InputLabelProps={{shrink: false}}
        required/>
      <TextField className={styles.textField} 
        id="standard-basic" 
        label="Address" 
        InputLabelProps={{shrink: false}}
        required/>
      <Button className={styles.button} type="submit" color="primary" variant="contained">Submit</Button>
    </form>
  </Paper>
);

export default BookingNew;