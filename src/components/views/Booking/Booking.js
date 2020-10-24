import React from 'react';
import styles from './Booking.module.scss';
import PropTypes from 'prop-types';


const Booking = ({id}) => (
  <div className={styles.component}>
    <h2>Booking View</h2>
    {id}
  </div>
);

Booking.propTypes = {
  id: PropTypes.number,
};

export default Booking;