import React, { Component } from 'react';
import User from './user';

export default class Users extends Component {
  columns = [
    { label: "User", key: "user" },
    { path: "first_name", label: "First Name" },
    { path: "last_name", label: "Last Name" },
    { path: "email", label: "Email" },
    { label: "Update", key: "update" },
    { label: "Delete", key: "delete" },
  ];

  raiseSort = path => {
    if (path) {
      const sortColumn = { ...this.props.sortColumn };
      if (sortColumn.path === path) {
        sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
      } else {
        sortColumn.path = path;
        sortColumn.order = "asc";
      }
      this.props.onSort(sortColumn);
    }
  };

  renderSortIcon = column => {
    const { sortColumn } = this.props;

    if (column.path !== sortColumn.path) {
      return null;
    }

    if (sortColumn.order === "asc") {
      return <i className="fa fa-sort-asc" />;
    } else {
      return <i className="fa fa-sort-desc" />;
    }
  };

  render() {
    const { users, onUpdateBegin, onUpdate, onUpdateEnd, onDelete } = this.props;

    return (
      <div>
        <h2>List of Users</h2>

        <table className="table">
          <thead className="thead-light">
          <tr>
            {this.columns.map(column => (
              <th
                className="clickable"
                key={column.path || column.key}
                onClick={() => this.raiseSort(column.path)}
              >
                {column.label} {this.renderSortIcon(column)}
              </th>
            ))}
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
  }
};
