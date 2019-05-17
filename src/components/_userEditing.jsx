import React from 'react';

const UserEditing = ({ user, onUpdate, onUpdateEnd }) => {
  return (
    <React.Fragment>
      <td>
        <input
          name="first_name"
          className="form-control"
          value={`${user.first_name}`}
          onChange={e => onUpdate(e, user)}
        />
      </td>
      <td>
        <input
          name="last_name"
          className="form-control"
          value={`${user.last_name}`}
          onChange={e => onUpdate(e, user)}
        />
      </td>
      <td>
        <input
          name="email"
          className="form-control"
          value={`${user.email}`}
          onChange={e => onUpdate(e, user)}
        />
      </td>
      <td>
        <button
          className="btn btn-success"
          onClick={() => onUpdateEnd(user)}
        >
          Save
        </button>
      </td>
    </React.Fragment>
  )
};

export default UserEditing;