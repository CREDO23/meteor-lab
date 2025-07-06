import React,  { useState } from "react";  
export function CreateTaskForm() {
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!taskTitle.trim()) return;


    await Meteor.callAsync("task.insert", {
      title: taskTitle.trim(),
      createdAt: new Date(),
    });

  
    setTaskTitle("");
  };


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Add a task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
