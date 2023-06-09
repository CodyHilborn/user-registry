import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setInputUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setInputAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (inputUsername.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }

    if (+inputAge < 0) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (positive number)",
      });
      return;
    }

    props.usersHandler({ username: inputUsername, age: inputAge });

    setInputUsername("");
    setInputAge("");
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={inputUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (in years)</label>
          <input
            id="age"
            type="text"
            value={inputAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
