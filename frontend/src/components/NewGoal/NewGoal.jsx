import React from "react";

export default function NewGoal(props) {
  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
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
