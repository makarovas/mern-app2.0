import React from "react";
import { makeid } from "../fakes/users";
export default function NewGoal(props) {
  const addGoalHandler = e => {
    e.preventDefault();
    const newGoal = {
      id: Math.floor(Math.random() * 109),
      text: makeid(213)
    };
    props.onAddGoal(newGoal);
  };
  return (
    <div>
      <form onSubmit={addGoalHandler}>
        <input type="text" name="goal" />
        <button type="submit">add</button>
      </form>
    </div>
  );
}
