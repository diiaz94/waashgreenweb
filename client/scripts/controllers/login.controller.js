import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Chats, Messages } from '../../../lib/collections';




export default class LoginCtrl extends Controller {
  constructor() {
    super(...arguments);


    this.$state.go('home');
    
 
    this.helpers({

    });
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
      }
    });
  }

  signup () {
  	if (_.isEmpty(this.user.username) || _.isEmpty(this.user.password) ) return;
  	console.log("voy");

  	var options = {
      username: this.user.username,
      email: this.user.username,
      password: this.user.password,
      profile: {
        createdOn: new Date()
      }
    };

  	Accounts.createUser(options, (err) => {
        if (err) return  console.log('Login error - ', err);
        this.$state.go('home');
    });
  }




}
 
LoginCtrl.$name = 'LoginCtrl';
LoginCtrl.$inject = ['$state'];

