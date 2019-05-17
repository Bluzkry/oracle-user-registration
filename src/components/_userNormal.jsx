import React from 'react';

const UserNormal = ({ user, onUpdateBegin }) => {
  return (
    <React.Fragment>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>{user.email}</td>
      <td>
        <button
          className="btn btn-info"
          onClick={() => onUpdateBegin(user)}
        >
          Update
        </button>
      </td>
    </React.Fragment>
  )
};

export default UserNormal;