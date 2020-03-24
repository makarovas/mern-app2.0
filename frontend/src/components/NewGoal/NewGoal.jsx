import React, { useState } from "react";
import { makeid } from "../fakes/users";
export default function NewGoal(props) {
  const [inputValue, setInputValue] = useState("");
  const addGoalHandler = e => {
    e.preventDefault();
    const newGoal = {
      id: Math.floor(Math.random() * 109),
      text: inputValue
    };
    props.onAddGoal(newGoal);
    setInputValue("");
  };

  const textChangeHandler = e => setInputValue(e.target.value);
  return (
    <div>
      <form onSubmit={addGoalHandler}>
        <input
          type="text"
          name="goal"
          onChange={textChangeHandler}
          value={inputValue}
        />
        <button type="submit">add</button>
      </form>
    </div>
  );
}
