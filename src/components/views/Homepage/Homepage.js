import React from 'react';
import styles from './Homepage.module.scss';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const demoOrders = [
  {id: '1', type: 'remote'},
  {id: '2', type: 'remote'},
  {id: '3', type: 'local'},
  {id: '4', type: 'remote'},
];

const demoReservations = [
  {table: '1', people: '3', time: '12:30 - 13:00'},
  {table: '3', people: '3', time: '13:30 - 14:30'},
  {table: '3', people: '2', time: '15:00 - 15:30'},
  {table: '2', people: '2', time: '17:00 - 19:00'},
  {table: '2', people: '1', time: '19:30 - 20:30'},
  {table: '1', people: '3', time: '18:00 - 19:00'},
  {table: '3', people: '1', time: '20:00 - 21:00'},
];

const demoEvents = [
  {table: '1, 2', name: 'Joe\'s Birthday', people: '5', time: '20:00 - 24:00'},
];

const Homepage = () => (
  <div>
    <Paper className={styles.component}>
      <Typography variant="h5" className={styles.title}>
        Dashboard
      </Typography >
      <Typography variant="h6" className={styles.subtitle}>
        Today&apos;s orders
      </Typography >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell>Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoOrders.map(row => (
            <TableRow key={row.id}>
              <TableCell>
                {row.id}
              </TableCell>
              <TableCell>
                {row.type}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography variant="h6" className={styles.subtitle}>
        Today&apos;s reservations
      </Typography >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Table</TableCell>
            <TableCell>People</TableCell>
            <TableCell>Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoReservations.map(row => (
            <TableRow key={row.table}>
              <TableCell>
                {row.table}
              </TableCell>
              <TableCell>
                {row.people}
              </TableCell>
              <TableCell>
                {row.time}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography variant="h6" className={styles.subtitle}>
        Today&apos;s events
      </Typography >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Table</TableCell>
            <TableCell>Event</TableCell>
            <TableCell>People</TableCell>
            <TableCell>Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoEvents.map(row => (
            <TableRow key={row.table}>
              <TableCell>
                {row.table}
              </TableCell>
              <TableCell>
                {row.name}
              </TableCell>
              <TableCell>
                {row.people}
              </TableCell>
              <TableCell>
                {row.time}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Homepage;