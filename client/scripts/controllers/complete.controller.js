import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Controller } from 'angular-ecmascript/module-helpers';
import { initMaterialKit } from '../lib/material-kit';




export default class CompleteCtrl extends Controller {
  constructor() {
    super(...arguments);
    initMaterialKit();
  }

  submit(completeUser) {
    debugger;
    this.callMethod('completeUser', completeUser, function(error, result) {
      if (result == 1) { //success
       this.$state.go('home');
      }
      else {
        alert("error");
      }
    });
  }

}
 
CompleteCtrl.$name = 'CompleteCtrl';
CompleteCtrl.$inject = ['$state'];

