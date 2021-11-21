import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditUser extends Component {

  constructor(props) {

    super(props)

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

  componentDidMount() {
    axios.get('http://localhost:4000/students/edit-user/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          designation: res.data.designation,
          phonenumber: res.data.phonenumber,
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeUserName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeUserEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeUserDesignation(e) {
    this.setState({ designation: e.target.value })
  }

  onChangeUserPhonenumber(e) {
    this.setState({ phonenumber: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const userObject = {
      name: this.state.name,
      email: this.state.email,
      designation: this.state.designation,
      phonenumber: this.state.phonenumber,
    };

    axios.put('http://localhost:4000/users/update-user/' + this.props.match.params.id, userObject)
      .then((res) => {
        console.log(res.data)
        console.log('User successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to User List 
    this.props.history.push('/user-list')
  }


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
          Update User
        </Button>
      </Form>
    </div>);
  }
}