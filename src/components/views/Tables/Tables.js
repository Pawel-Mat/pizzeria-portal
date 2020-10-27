import React from 'react';
import styles from './Tables.module.scss';

import {NavLink} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import TextField from '@material-ui/core/TextField';

const demoTables = [
  {time: '12:00-12.30',
    table1: {status: 'booked', order: '123'},
    table2: {status: 'free', order: ''},
    table3: {status: 'event', order: '234'},
  },
  {time: '12:30-13.00',
    table1: {status: 'booked', order: '123'},
    table2: {status: 'free', order: ''},
    table3: {status: 'event', order: '234'},
  },
  {time: '13:00-13.30',
    table1: {status: 'free', order: ''},
    table2: {status: 'free', order: ''},
    table3: {status: 'event', order: '234'},
  },
  {time: '13:30-14.00',
    table1: {status: 'event', order: '345'},
    table2: {status: 'free', order: ''},
    table3: {status: 'event', order: '234'},
  },
  {time: '14:00-14.30',
    table1: {status: 'event', order: '345'},
    table2: {status: 'free', order: ''},
    table3: {status: 'event', order: '234'},
  },
  {time: '14:30-15.00',
    table1: {status: 'event', order: '345'},
    table2: {status: 'booked', order: '456'},
    table3: {status: 'event', order: '234'},
  },

  {time: '15:00-15.30',
    table1: {status: 'event', order: '345'},
    table2: {status: 'booked', order: '456'},
    table3: {status: 'event', order: ''},
  },
  {time: '16:00-16.30',
    table1: {status: 'booked', order: '678'},
    table2: {status: 'booked', order: '456'},
    table3: {status: 'event', order: 'free'},
  },
  {time: '16:30-17.00',
    table1: {status: 'booked', order: '678'},
    table2: {status: 'booked', order: '456'},
    table3: {status: 'event', order: 'free'},
  },
  {time: '17:00-17.30',
    table1: {status: 'booked', order: '678'},
    table2: {status: 'booked', order: '456'},
    table3: {status: 'event', order: 'free'},
  },
  {time: '17:30-18.00',
    table1: {status: 'booked', order: '678'},
    table2: {status: 'booked', order: '456'},
    table3: {status: 'free', order: ''},
  },
  {time: '18:00-18.30',
    table1: {status: 'free', order: ''},
    table2: {status: 'booked', order: '456'},
    table3: {status: 'free', order: ''},
  },
  {time: '18:30-19.00',
    table1: {status: 'free', order: ''},
    table2: {status: 'booked', order: '456'},
    table3: {status: 'free', order: ''},
  },
  {time: '19:00-19.30',
    table1: {status: 'free', order: ''},
    table2: {status: 'booked', order: '456'},
    table3: {status: 'free', order: ''},
  },
  {time: '19:30-20.00',
    table1: {status: 'free', order: ''},
    table2: {status: 'booked', order: '456'},
    table3: {status: 'free', order: ''},
  },
];

const renderActions = status => {
  switch (status) {
    case 'free':
      return (
        <>
          <Button 
            component={NavLink} 
            to={`${process.env.PUBLIC_URL}/tables/booking/new`}
            className={styles.buttonGreen}>free
          </Button>
        </>
      );
    case 'booked':
      return (
        <>
          <Button
            href={`${process.env.PUBLIC_URL}/tables/booking:${demoTables.order}`}
            className={styles.buttonRed}>booked
          </Button>
          <Button className={styles.button} size= "small" color="inherit">
            <DeleteForeverIcon />
          </Button>
        </>
      );
    case 'event':
      return (
        <>
          <Button 
            href={`${process.env.PUBLIC_URL}/tables/events:${demoTables.order}`}
            className={styles.buttonOrange}>event
          </Button>
          <Button className={styles.button} size= "small" color="inherit">
            <DeleteForeverIcon />
          </Button>
        </>
      );
    default:
      return null;
  }
};

const Tables = () => (
  <div>
    <Paper className={styles.component}>
      <Typography variant="h5" className={styles.title}>
        Tables
      </Typography>
      <div className={styles.calendar}>
        <form noValidate>
          <TextField
            className={styles.input}
            id="date"
            label="Date"
            type="date"
            defaultValue="2020-10-26"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Table 1</TableCell>
            <TableCell>Table 2</TableCell>
            <TableCell>Table 3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoTables.map(row => (
            <TableRow key={row.time}>
              <TableCell>
                {row.time}
              </TableCell>
              <TableCell>
                {renderActions(row.table1.status)}
              </TableCell>
              <TableCell>
                {renderActions(row.table2.status)}
              </TableCell>
              <TableCell>
                {renderActions(row.table3.status)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <Link to={`${process.env.PUBLIC_URL}/tables/booking:id`}>Booking</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>New Booking</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events:id`}>Events</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>New Events</Link> */}
    </Paper>
  </div>
);

export default Tables;