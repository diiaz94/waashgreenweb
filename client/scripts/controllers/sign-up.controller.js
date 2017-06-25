import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Chats, Messages } from '../../../lib/collections';




export default class SignUpCtrl extends Controller {
  constructor() {
    super(...arguments);


    //this.$state.go('home');
    
 
    this.helpers({

    });
  }

  
  signUp(user){

  }
  registerWithFacebook () {
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
      }
    });
  }

}
 
SignUpCtrl.$name = 'SignUpCtrl';
SignUpCtrl.$inject = ['$state'];