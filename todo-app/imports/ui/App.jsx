import React from 'react';
import { TaskList } from './components/task/task-list';
import {useTracker} from 'meteor/react-meteor-data';
import { taskCollection } from '../api/task-collections';


export const App = () => {

  const tasks = useTracker(() => taskCollection.find({}).fetch());

  return (
    <div>
      <h1>Welcome to Meteor!</h1>
      <TaskList tasks={tasks}/>
    </div>
  );
};
