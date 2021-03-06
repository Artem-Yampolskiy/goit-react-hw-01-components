import React from 'react';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';

import styles from './FriendList.module.css';
 
const FriendList = ({ friends }) => (
  < ul className={styles.FriendList} >
        <FriendListItem friends={friends} />        
    </ul >
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;


