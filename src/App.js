import React, { Component } from 'react';
import axios from "axios/index";
import Users from './components/users';

class App extends Component {
  state = {users: []};

  async componentDidMount() {
    const { data } = await axios.get('https://reqres.in/api/users?page=1');
    const { data: users } = data;
    this.setState({ users });
  }

  handleDelete = async user => {
    const originalUsers = this.state.users;
    const users = originalUsers.filter(u => u.id !== user.id);
    this.setState({ users });

    try {
      await axios.delete(`https://reqres.in/api/users/${user.id}`);
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
