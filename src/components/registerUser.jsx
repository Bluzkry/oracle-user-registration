import React, { Component } from 'react';
import Joi from "joi-browser";

export default class RegisterUser extends Component {
  state = {
    user: {
      first_name: "",
      last_name: "",
      email: "",
    },
    errors: {}
  };

  schema = {
    first_name: Joi.string()
      .required()
      .label("First Name"),
    last_name: Joi.string()
      .required()
      .label("Last Name"),
    email: Joi.string()
      .required()
      .email()
      .label("Email")
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.user, this.schema, options);
    if (!error) {
      return null;
    }

    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = {...this.state.errors};
    const errorMessage = this.validateProperty(input);
    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }

    const user = {...this.state.user};
    user[input.name] = input.value;

    this.setState({ user, errors });
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();

    if (errors) {
      this.setState({ errors });
    } else {
      this.props.onAdd(this.state.user);
      this.setState({
        user: { first_name: "", last_name: "", email: ""},
        errors: {},
      });
    }
  };

  render() {
    const { errors, user } = this.state;

    return (
      <div>
        <h2>Register a New User</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="first_name">First Name</label>
            <input
              name="first_name"
              className="form-control"
              value={user.first_name}
              onChange={this.handleChange}
            />
            {errors.first_name && <div className="alert alert-danger">{errors.first_name}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="last_name">Last Name</label>
            <input
              name="last_name"
              className="form-control"
              value={user.last_name}
              onChange={this.handleChange}
            />
            {errors.last_name && <div className="alert alert-danger">{errors.last_name}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              name="email"
              className="form-control"
              value={user.email}
              onChange={this.handleChange}
            />
            {errors.email && <div className="alert alert-danger">{errors.email}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary">
            Register
          </button>

        </form>
      </div>
    )
  }
}
