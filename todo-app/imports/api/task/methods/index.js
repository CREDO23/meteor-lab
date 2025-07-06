import { Meteor } from 'meteor/meteor';
import { taskCollection } from '../task-collections';


Meteor.methods({
    'task.insert'(task) {
       return   taskCollection.insertAsync(task);
    },
});