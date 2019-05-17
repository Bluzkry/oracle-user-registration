import React from 'react';

const User = ({ user, onDelete }) => {
  return (
    <tr key={user.id}>
      <td><img src={user.avatar} alt={user.first_name} /></td>
      <td>{user.first_name} {user.last_name}</td>
      <td>{user.email}</td>
      <td><button className="btn btn-info">Update</button></td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => onDelete(user)}
        >
          Delete
        </button>
      </td>
    </tr>
  )
};

export default User