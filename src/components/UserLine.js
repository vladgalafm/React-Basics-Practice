import React from 'react';
import './user-line.css';

function UserLine(props) {
  const dateParse = (value) => {
    const match = /(\d{4})-(\d{2})-(\d{2})/.exec(value);
    return `${match[1]}.${match[2]}.${match[3]}`;
  };

  return (
    <label className="user-line" data-user={props.data.id}>
      <input className="user-line__checkbox" id={props.data.id} type="checkbox" checked={props.data.isChecked} onChange={() => props.handleChange(props.data.id)} />
      <span className="user-line__id">{props.data.id}</span>
      <span className="user-line__created-at">{dateParse(props.data.createdAt)}</span>
      <span className="user-line__name">{props.data.name}</span>
      <span className="user-line__email">{props.data.email}</span>
      <span className="user-line__description">{props.data.description}</span>
    </label>
  );
}

export default UserLine;