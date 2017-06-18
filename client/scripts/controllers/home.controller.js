import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Tasks } from '../../../lib/collections';
 
export default class HomeCtrl extends Controller {
  constructor() {
    super(...arguments);
 	//Meteor.subscribe('allTask');
    this.helpers({
      data() {
        return [];
      }
    });
  }

  logout () {
    debugger;
  	Meteor.logout((err) => {
        if (err) return  console.log('Login error - ', err);
        this.$state.go('login');
    });
  }

  remove (task) {
    this.callMethod('removeTask', task._id);
  }

  addTask (task) {
  	this.callMethod('addTask', task);
  	this.newTask.text = "";
  }

}
 
HomeCtrl.$name = 'HomeCtrl';
HomeCtrl.$inject = ['$state'];