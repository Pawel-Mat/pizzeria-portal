import React from 'react';
import styles from './Events.module.scss';
import PropTypes from 'prop-types';


const Events = ({id}) => (
  <div className={styles.component}>
    <h2>Events View</h2>
    {id}
  </div>
);

Events.propTypes = {
  id: PropTypes.number,
};

export default Events;