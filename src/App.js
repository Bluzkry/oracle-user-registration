import React, { Component } from 'react';
import axios from "axios/index";

class App extends Component {
  state = {users: []};

  async componentDidMount() {
    const { data } = await axios.get('https://reqres.in/api/users?page=1');
    const { data: users } = data;
    this.setState({ users });
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
