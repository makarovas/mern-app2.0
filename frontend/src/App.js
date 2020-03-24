import React, { useState } from "react";
import "./App.css";
import { users } from "./components/fakes/users";
import NewGoal from "./components/NewGoal/NewGoal";

function App() {
  const [courseUsers, setCourseUsers] = useState(users);
  const addNewGoalHandler = newGoal => {
    setCourseUsers(prevProp => prevProp.concat(newGoal));
    console.log(courseUsers);
  };
  return (
    <div className="App">
      <NewGoal onAddGoal={addNewGoalHandler} />
    </div>
  );
}

export default App;
