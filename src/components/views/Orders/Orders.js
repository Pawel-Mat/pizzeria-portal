import React from 'react';
import styles from './Orders.module.scss';
import PropTypes from 'prop-types';


const Orders = ({id}) => (
  <div className={styles.component}>
    <h2>Orders View</h2>
    {id}
  </div>
);
Orders.propTypes = {
  id: PropTypes.number,
};

export default Orders;