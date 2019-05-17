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

  render() {
    const { users } = this.state;

    return (
      <div className="App">
        <Users
          users={users}
        />
      </div>
    );
  }
}

export default App;
