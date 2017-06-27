import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Tasks } from '../../../lib/collections';
import { initMaterialKit } from '../lib/material-kit';
 
export default class HomeCtrl extends Controller {
  constructor() {
    super(...arguments);
 	  Meteor.subscribe('users');
    this.helpers({
      users() {
        return Meteor.users.find();
      }
    });
    initMaterialKit();
    console.log(this.currentUser);
  }

  logout () {
    debugger;
  	Meteor.logout((err) => {
        if (err) return  console.log('Login error - ', err);
        this.$state.go('login');
    });
  }

  deleteUser (userId) {
    debugger;

    this.callMethod('deleteUser', userId, function(error, result) {
      console.log(error);
      console.log(result);
    });
    
  }

  addTask (task) {
  	this.callMethod('addTask', task);
  	this.newTask.text = "";
  }

}
 
HomeCtrl.$name = 'HomeCtrl';
HomeCtrl.$inject = ['$state'];