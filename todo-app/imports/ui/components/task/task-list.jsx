import React from "react";
import { TaskItem } from "./task-item";

export function TaskList(props) {
  const { tasks } = props;

  const onCheckboxClick = async (task) => {
    await Meteor.callAsync("task.toggleChecked", {
      _id: task._id,
      isChecked: task.isChecked,
    });
  };

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          {...task}
          onCheckboxClick={onCheckboxClick}
        />
      ))}
    </div>
  );
}
