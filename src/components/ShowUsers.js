import React from 'react';
import './show-users.css';

function ShowUsers(props) {
  const styles = {};

  (props.data.displayButton) ? (styles.display = 'block') : (styles.display = 'none');

  return (
    <button className="show-users" style={styles} onClick={props.handleClick}>Show Users</button>
  );
}

export default ShowUsers;