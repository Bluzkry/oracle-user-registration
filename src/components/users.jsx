import React from 'react';
import User from './user';

const Users = ({ users, onUpdateBegin, onUpdate, onUpdateEnd, onDelete }) => {
  return (
    <div>
      <h1>List of Users</h1>

      <table className="table">
        <thead className="thead-light">
        <tr>
          <th scope="col">User</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">E-mail</th>
          <th scope="col">Update</th>
          <th scope="col">Delete</th>
        </tr>
        </thead>
        <tbody>
        {users.map(user => (
          <User
            key={user.id}
            user={user}
            onUpdateBegin={onUpdateBegin}
            onUpdate={onUpdate}
            onUpdateEnd={onUpdateEnd}
            onDelete={onDelete}
          />
        ))}
        </tbody>
      </table>
    </div>
  )
};

export default Users;
