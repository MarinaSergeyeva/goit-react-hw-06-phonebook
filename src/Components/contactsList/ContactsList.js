import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./ContactsList.module.css";

class ContactsList extends Component {
  render() {
    return (
      <>
        <TransitionGroup component="ul" className={styles.contactsList}>
          {this.props.contacts.map((contact) => (
            <CSSTransition
              key={contact.id}
              in={this.props.contacts.length > 0}
              timeout={250}
              classNames={styles}
            >
              <li className={styles.contactsListItem}>
                {contact.name}: {contact.number}
                <button
                  type="button"
                  onClick={() => this.props.deleteContact(contact.id)}
                >
                  Delete
                </button>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </>
    );
  }
}

export default ContactsList;
