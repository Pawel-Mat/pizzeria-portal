import React from 'react';
import styles from './Waiter.module.scss';
import {Link} from 'react-router-dom';


const Waiter = () => (
  <div className={styles.component}>
    <h2>Waiter View</h2>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`}>New Order</Link>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order:id`}>Order</Link>
  </div>
);

export default Waiter;