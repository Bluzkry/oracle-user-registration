import React, { Component } from 'react';
import Users from './components/users';
import { getUsers, deleteUser } from "./services/userService";

class App extends Component {
  state = {users: []};

  async componentDidMount() {
    const users = await getUsers();
    this.setState({ users });
  }

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

  render() {
    const { users } = this.state;

    return (
      <div className="App">
        <Users
          users={users}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
