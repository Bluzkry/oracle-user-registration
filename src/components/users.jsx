import React from 'react';

const Users = ({ users, onDelete }) => {
  return (
    <div>
      <h1>List of Users</h1>

      <table className="table">
        <thead className="thead-light">
        <tr>
          <th scope="col">User</th>
          <th scope="col">Name</th>
          <th scope="col">E-mail</th>
          <th scope="col">Update</th>
          <th scope="col">Delete</th>
        </tr>
        </thead>
        <tbody>
        {users.map(user => (
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
        ))}
        </tbody>
      </table>
    </div>
  )
};

export default Users;
