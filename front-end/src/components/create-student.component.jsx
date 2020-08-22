import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class CreateStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      rollno: "",
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleRollNoChange = this.handleRollNoChange.bind(this);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handleRollNoChange(e) {
    this.setState({ rollno: e.target.value });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    console.log(this.state.name);
    this.setState({ name: "", email: "", rollno: "" });
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" onChange={this.handleNameChange} />
          </Form.Group>

          <Form.Group controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" onChange={this.handleEmailChange} />
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>Roll No</Form.Label>
            <Form.Control
              type="text"
              onChange={this.handleEmailChange.handleRollNoChange}
            />
          </Form.Group>

          <Button variant="danger" size="lg" block="block" type="submit">
            Create Student
          </Button>
        </Form>
      </div>
    );
  }
}
