import { Meteor } from 'meteor/meteor';
import { Tasks } from '../lib/collections';

Meteor.publish('users', function() {
  return Meteor.users.find({}, { fields: { profile: 1 } });
});


Meteor.publish('allTask', function(){
  return Tasks.find();
});