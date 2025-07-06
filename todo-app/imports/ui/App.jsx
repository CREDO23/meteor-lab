import React from 'react';
import { TaskList } from './components/task/task-list';
import { tasks } from '../api/tasks';


export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <TaskList tasks={tasks}/>
  </div>
);
