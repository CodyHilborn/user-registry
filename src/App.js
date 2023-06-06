import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const usersHandler = (newUser) => {
    setUsers((prev) => {
      return [...prev, newUser];
    });
  };

  return (
    <div>
      <AddUser usersHandler={usersHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
