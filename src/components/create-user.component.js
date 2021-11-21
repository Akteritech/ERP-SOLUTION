import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateUser extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserDesignation = this.onChangeUserDesignation.bind(this);
    this.onChangeUserPhonenumber = this.onChangeUserPhonenumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      email: '',
      designation: '',
      phonenumber: ''
    }
  }

  onChangeUserName(e) {
    this.setState({name: e.target.value})
  }

  onChangeUserEmail(e) {
    this.setState({email: e.target.value})
  }

  onChangeUserDesignation(e) {
    this.setState({designation: e.target.value})
  }

  onChangeUserPhonenumber(e) {
    this.setState({phonenumber: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()

    const userObject = {
      name: this.state.name,
      email: this.state.email,
      designation: this.state.designation,
      phonenumber: this.state.phonenumber,

    };
    axios.post('http://localhost:4000/users/create-user', userObject)
      .then(res => console.log(res.data));

      this.setState({name: '', email: '', designation: '', phonenumber: '' })
  }

//   onSubmit(e) {
//     e.preventDefault()

//     console.log(`User successfully created!`);
//     console.log(`Name: ${this.state.name}`);
//     console.log(`Email: ${this.state.email}`);
//     console.log(`Designation: ${this.state.designation}`);
//     console.log(`Phone Number: ${this.state.phonenumber}`);

    
//   }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeUserName}/>
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeUserEmail}/>
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Designation</Form.Label>
          <Form.Control type="text" value={this.state.designation} onChange={this.onChangeUserDesignation}/>
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Designation</Form.Label>
          <Form.Control type="text" value={this.state.phonenumber} onChange={this.onChangeUserPhonenumber}/>
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create User
        </Button>
      </Form>
    </div>);
  }
}