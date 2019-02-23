import React, { Component } from 'react';
import './app.css';
import ShowUsers from './components/ShowUsers';
import OverallInfo from './components/OverallInfo';
import UserLine from './components/UserLine';

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayButton: true,
      displayStats: false,
      displayUsers: false,
      totalUsers: 0,
      totalChecked: 0,
      usersData: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showAllUsers = this.showAllUsers.bind(this);
  }

  handleClick() {
    fetch('https://tanuhaua.github.io/datas-file-json/visitors.json')
      .then(response => response.json())
      .then(data => {
        data.forEach(user => {
          user.isChecked = false;
        });
        this.setState({
          usersData: data,
          displayButton: false,
          displayStats: true,
          displayUsers: true,
          totalUsers: data.length,
        });
      });
  }

  handleChange(id) {
    let flag;
    this.setState(prevState => {
      const updatedUsersData = prevState.usersData.map(user => {
        if (user.id === id) {
          (user.isChecked) ? (flag = -1) : (flag = 1);
          user.isChecked = !user.isChecked;
        }
        return user;
      });
      return {
        totalChecked: this.state.totalChecked + flag,
        usersData: updatedUsersData,
      };
    });
    const label = document.querySelector(`[data-user="${id}"]`);
    const checkbox = label.querySelector('.user-line__checkbox');
    (checkbox.checked === true) ? label.classList.add('user-line--checked') : label.classList.remove('user-line--checked');
  }

  showAllUsers() {
    if (this.state.displayUsers) {
      console.dir(this.state.usersData);
      return this.state.usersData.map(user => <UserLine key={user.id} data={user} handleChange={this.handleChange} />);
    }
  }

  render() {
    return (
      <>
        <ShowUsers
          handleClick={this.handleClick}
          data={this.state}
        />
        <OverallInfo
          data={this.state}
        />
        {this.showAllUsers()}
      </>
    );
  }
}

export default App;