import React from "react";
import { TaskList } from "./components/task/task-list";
import { useTracker, useSubscribe } from "meteor/react-meteor-data";
import { taskCollection } from "../api/task/task-collections";
import { CreateTaskForm } from "./components/task/create-task-form";
import { useState } from "react";

export const App = () => {
  const isLoading = useSubscribe("tasks");

  const tasks = useTracker(() =>
    taskCollection.find({}, { sort: { createdAt: -1 } }).fetch()
  );

  if (isLoading()) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome to Meteor!</h1>

      <CreateTaskForm />

      <TaskList tasks={tasks} />
    </div>
  );
};
