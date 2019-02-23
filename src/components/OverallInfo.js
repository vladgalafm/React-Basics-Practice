import React from 'react';
import './overall-info.css';

function OverallInfo(props) {
  const styles = {};

  (props.data.displayStats) ? (styles.display = 'block') : (styles.display = 'none');

  return (
    <div className="overall-info" style={styles}>
      <p>Total: {props.data.totalUsers} user{(props.data.totalUsers !== 1) && 's'}</p>
      <p>Checked: {props.data.totalChecked} user{(props.data.totalChecked !== 1) && 's'}</p>
    </div>
  );
}

export default OverallInfo;