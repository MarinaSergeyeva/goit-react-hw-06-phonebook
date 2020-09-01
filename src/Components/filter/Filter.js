import React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Filter.module.css";
import { connect } from "react-redux";
import actions from "../../redux/contacts/contactsActions";

const Filter = ({ filter, getFilter }) => {
  return (
    <div className={styles.filterWrapper}>
      <CSSTransition
        in={true}
        timeout={1000}
        classNames={styles}
        // appear={true}
        // unmountOnExit
      >
        <label className={styles.filter}>
          Find contacts by name
          <input type="text" name="filter" value={filter} onChange={getFilter} />
        </label>
      </CSSTransition>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    filter: state.contacts.filter
  };
};

const mapDispatchToProps = dispatch => ({
  onFilter: filter => dispatch(actions.changeFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
