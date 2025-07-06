import { Meteor } from "meteor/meteor";
import { taskCollection } from "../imports/api/task/task-collections";
import "../imports/api/task/task-publication";
import "../imports/api/task/methods";

const insertTask = (taskTitle) =>
  taskCollection.insertAsync({
    title: taskTitle,
  });

Meteor.startup(async () => {

  // If the Links collection is empty, add some data.
  if ((await taskCollection.find().countAsync()) === 0) {
    [
      "First Task",
      "Second Task",
      "Third Task",
      "Fourth Task",
      "Fifth Task",
      "Sixth Task",
      "Seventh Task",
    ].forEach(insertTask);
  }
});
