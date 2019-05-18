import React from 'react';
import UserEditing from './_userEditing';
import UserNormal from './_userNormal';

const User = ({ user, onUpdateBegin, onUpdate, onUpdateEnd, onDelete }) => {
  return(
    <tr key={user.id}>
      <td>
        {user.avatar ?
          <img src={user.avatar} alt={user.first_name} /> :
          <img className="blank_profile" src="./profileBlank.png" alt="Blank Profile" />
        }
      </td>
      {user.editing ?
        <UserEditing
          user={user}
          onUpdate={onUpdate}
          onUpdateEnd={onUpdateEnd}
        />
        :
        <UserNormal
          user={user}
          onUpdateBegin={onUpdateBegin}
        />
      }
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

export default User;
