import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Tasks } from '../../../lib/collections';
 
export default class HomeCtrl extends Controller {
  constructor() {
    super(...arguments);
 	  Meteor.subscribe('users');
    $('body').bootstrapMaterialDesign();
    this.helpers({
      users() {
        return Meteor.users.find();
      }
    });
    console.log(this.currentUser);
  }

  logout () {
  	Meteor.logout((err) => {
        if (err) return  console.log('Login error - ', err);
        this.$state.go('login');
    });
  }

  deleteUser (userId) {

    this.callMethod('deleteUser', userId, function(error, result) {
      if (result == 1) { //success
        alert("registro eliminado exitosamente");
      }
      else {
        alert("error al eliminar registro");
      }
    });
    
  }

  addTask (task) {
  	this.callMethod('addTask', task);
  	this.newTask.text = "";
  }

}
 
HomeCtrl.$name = 'HomeCtrl';
HomeCtrl.$inject = ['$state'];