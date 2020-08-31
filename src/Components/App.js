import React, { Component } from "react";
import ContactForm from "./contactForm/ContactForm";
import ContactsList from "./contactsList/ContactsList";
import Filter from "./filter/Filter";
import { v4 as uuidv4 } from "uuid";
import { CSSTransition } from "react-transition-group";
import styles from "./App.module.css";
import Alert from "./Alert/Alert";

export default class App extends Component {
  state = {
    contacts: [
      // {
      //   id: "id-1",
      //   name: "Rosie Simpson",
      //   number: "459-12-56",
      // },
      // {
      //   id: "id-2",
      //   name: "Hermione Kline",
      //   number: "443-89-12",
      // },
      // {
      //   id: "id-3",
      //   name: "Eden Clements",
      //   number: "645-17-79",
      // },
      // {
      //   id: "id-4",
      //   name: "Annie Copeland",
      //   number: "227-91-26",
      // },
    ],
    filter: "",
    alert: false,
  };

  componentDidMount() {
    console.log("Task componentDidMount");
    const persistedContacts = localStorage.getItem("contacts");

    if (persistedContacts) {
      this.setState({
        contacts: JSON.parse(persistedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Task componentDidUpdate");

    if (prevProps !== prevState) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addItem = ({ name, number }) => {
    const { contacts } = this.state;

    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      this.setState({ alert: true });
      setTimeout(() => this.setState({ alert: false }), 1500);
      // alert("The name is already exsist");
    } else {
      this.setState((prevState) => ({
        contacts: [
          ...prevState.contacts,
          {
            id: uuidv4(),
            name,
            number,
          },
        ],
      }));
    }
  };

  getFilter = (e) => {
    console.log(e.target);
    const { value } = e.target;

    this.setState({
      filter: value,
    });
  };

  findContact = () => {
    const { contacts, filter } = this.state;
    console.log(contacts);
    return filter
      ? contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;
  };

  deleteContact = (id) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((contact) => contact.id !== id),
      };
    });
  };

  render() {
    // const { contacts, filter, alert } = this.state;
    return (
      <>
        <Alert alert={alert} />
        {/* <CSSTransition
          in={true}
          timeout={500}
          classNames={styles}
          appear={true}
          unmountOnExit
        >
          <p className={styles.sectionTitle}> Phonebook </p>
        </CSSTransition>
        <ContactForm addItem={this.addItem} />
        {contacts.length > 1 && (
          <Filter filter={filter} getFilter={this.getFilter} />
        )}
        <ContactsList
          contacts={this.findContact()}
          deleteContact={this.deleteContact}
        /> */}
      </>
    );
  }
}
