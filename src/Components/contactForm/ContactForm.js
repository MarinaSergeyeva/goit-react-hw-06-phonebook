import React, { Component } from "react";
import styles from "./ContactForm.module.css";
import { connect } from "react-redux";
import actions from "../../redux/contacts/contactsActions";

class ContactForm extends Component {
  state = {
    name: "",
    number: ""
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddContact(this.state);
    // this.props.addItem(this.state);
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    // console.log("props", this.props);
    return (
      <form onSubmit={this.handleSubmit} className={styles.contactForm}>
        <label>
          Name
          <input type="text" name="name" value={name} onChange={this.handleChange} />
        </label>
        <label>
          Number
          <input type="text" name="number" value={number} onChange={this.handleChange} />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddContact: contact => dispatch(actions.addContact(contact))
});

export default connect(
  null,
  mapDispatchToProps
)(ContactForm);
