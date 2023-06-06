import React from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (in years)</label>
        <input id="age" type="text" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
