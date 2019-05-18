import React, { Component } from 'react';
import Users from './components/users';
import RegisterUser from './components/registerUser';
import { getUsers, updateUser, deleteUser } from "./services/userService";

export default class App extends Component {
  state = {users: []};

  async componentDidMount() {
    const users = await getUsers();
    users.map(user => user.editing = false);
    this.setState({ users });
  }

  handleAdd = async user => {
    console.log(user);
  };

  handleDelete = async user => {
    const originalUsers = this.state.users;
    const users = originalUsers.filter(u => u.id !== user.id);
    this.setState({ users });

    try {
      await deleteUser(user.id);
    }
    catch (ex) {
      alert('We are unable to delete your user. Please try again later or contact us.');
      this.setState({ users: originalUsers });
    }
  };

  beginUpdate = user => {
    const users = [...this.state.users];
    const index = users.indexOf(user);
    users[index] = {...users[index]};
    users[index].editing = true;

    this.setState({ users });
  };

  handleChange = ({ currentTarget: input }, user) => {
    const users = [...this.state.users];
    const index = users.indexOf(user);
    users[index] = {...users[index]};
    users[index][input.name] = input.value;

    this.setState({ users });
  };

  update = async user => {
    const users = [...this.state.users];
    const index = users.indexOf(user);
    users[index] = {...users[index]};
    users[index].editing = false;

    this.setState({ users });

    try {
      await updateUser(user.id, user);
    }
    catch (ex) {
      alert('We are unable to update your user. Please try again later or contact us.');
    }
  };

  render() {
    const { users } = this.state;

    return (
      <div className="App">
        <Users
          users={users}
          onDelete={this.handleDelete}
          onUpdateBegin={this.beginUpdate}
          onUpdate={this.handleChange}
          onUpdateEnd={this.update}
        />
        <RegisterUser
          onAdd={this.handleAdd}
        />
      </div>
    );
  }
}
