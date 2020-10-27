import React from 'react';
import styles from './Kitchen.module.scss';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {NavLink} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';


const demoOrders = [
  {order: '123', description: 'Zio Stefano\'s Doughnut', takeaway: 'yes', status: 'new'},
  {order: '234', description: 'Zia Giulia\'s Breakfast', takeaway: 'yes', status: 'prepared'},
  {order: '345', description: 'Nonna Alba\'s Pizza', takeaway: 'no', status: 'in progress'},
  {order: '456', description: 'Nonno Alberto\'s Salad', takeaway: 'no', status: 'prepared'},
];

const renderActions = status => {
  switch (status) {
    case 'in progress':
      return (
        <>
          <Button className={styles.buttonRed} variant="contained">in progress</Button>
        </>
      );
    case 'new':
      return (
        <Button className={styles.buttonYellow} variant="contained">new</Button>
      );
    case 'prepared':
      return (
        <Button className={styles.buttonGreen} variant="contained">prepared</Button>
      );
     
    default:
      return null;
  }
};

const Kitchen = () => (
  <Paper className={styles.component}>
    <Typography variant="h5" className={styles.title}>
      Kitchen
    </Typography >
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Order</TableCell>
          <TableCell>Order Description</TableCell>
          <TableCell>Takeaway</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoOrders.map(row => (
          <TableRow key={row.id}>
            <TableCell>
              {row.order && (
                <Button variant="contained" component={NavLink} to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                  {row.order}
                </Button>
              )}
            </TableCell>
            <TableCell>
              {row.description}
            </TableCell>
            <TableCell>
              {row.takeaway}
            </TableCell>
            <TableCell>
              {renderActions(row.status)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Kitchen;