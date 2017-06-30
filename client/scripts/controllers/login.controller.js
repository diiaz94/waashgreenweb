import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Chats, Messages } from '../../../lib/collections';
import { initMaterialKit } from '../lib/material-kit';




export default class LoginCtrl extends Controller {
  constructor() {
    super(...arguments);
    this.helpers({

    });
    initMaterialKit();
  }

  login (user) {
    debugger;
  	if (_.isEmpty(user) || _.isEmpty(user.username) || _.isEmpty(user.password) ) return;
 		debugger;
 		Meteor.loginWithPassword(user.username, user.password, (err) => {
        if (err) return  console.log('Login error - ', err);
        this.$state.go('home');
    });
   
  }

  loginWithFacebook () {
    debugger;
    Meteor.loginWithFacebook({
      requestPermissions: ['public_profile', 'email']
    }, (err) => {
      debugger;
      if (err) {
        console.log(err);
        // handle error
      } else {
        console.log("login =? ");
        // successful login!
        this.$state.go('home');
      }
    });
  }

  beWaasher() {
    this.$state.go('be-waasher');
  }


}
 
LoginCtrl.$name = 'LoginCtrl';
LoginCtrl.$inject = ['$state'];

