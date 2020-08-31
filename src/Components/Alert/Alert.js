import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Alert.module.css";

export default class Alert extends Component {
  render() {
    return (
      <CSSTransition
        in={this.props.alert}
        classNames={styles}
        timeout={250}
        unmountOnExit
      >
        <p className={styles.alert}>The name is already exist</p>
      </CSSTransition>
    );
  }
}
