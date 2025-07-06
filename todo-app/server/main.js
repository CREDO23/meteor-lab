import { Meteor } from 'meteor/meteor';
import { taskCollection } from '../imports/api/task-collections';


const insertTask = (taskTitle) => taskCollection.insertAsync({
  title: taskTitle,
});


Meteor.startup(async () => {
  // If the Links collection is empty, add some data.
  if ((await taskCollection.find().countAsync() === 0)) {
    insertTask('First Task');
    insertTask('Second Task');
    insertTask('Third Task');
    insertTask('Fourth Task');
  }
});