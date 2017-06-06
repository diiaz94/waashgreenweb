import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Tasks } from '../lib/collections';
 
Meteor.methods({
   removeTask(taskId) {

    if (!this.userId) {
      throw new Meteor.Error('not-logged-in',
        'Must be logged to remove a chat.');
    }

    check(taskId, String);


    return Tasks.remove({ _id : taskId });
  },

  addTask(task) {
    if (!this.userId) {
      throw new Meteor.Error('not-logged-in',
        'Must be logged to remove a chat.');
    }
    check(task, {
      text: String
    });
    task.createdAt = new Date();
    task.userId = this.userId;
    Tasks.insert(task);
  }

});