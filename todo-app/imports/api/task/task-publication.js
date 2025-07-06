import {Meteor} from 'meteor/meteor';
import { taskCollection } from './task-collections';

Meteor.publish('tasks', () => {
  return taskCollection.find();
});