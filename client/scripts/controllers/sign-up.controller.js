import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Chats, Messages } from '../../../lib/collections';
import { initMaterialKit } from '../lib/material-kit';



export default class SignUpCtrl extends Controller {
  constructor() {
    super(...arguments);


    //this.$state.go('home');
    
 
    this.helpers({

    });
    initMaterialKit();
  }

  
  submit(user){
    debugger;
    if($(".step1").is(":visible")){
      $(".step1").hide();
      $(".step2").show();
    }
    else if($(".step2").is(":visible")){
      this.signup();
    }

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
  
  signup () {

    this.$state.go('sign-up');
    return;
    if (_.isEmpty(this.user.username) || _.isEmpty(this.user.password) ) return;
    console.log("voy");
    debugger

    var options = {
      username: this.user.username,
      email: this.user.username,
      password: this.user.password,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      rut: this.user.rut,
      region : "", //TODO: falta
      comuna :"", //TODO: Falta
      phone: this.user.phone,
      rol: "Cliente", //TODO: verificar si siempre será cliente
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
 
SignUpCtrl.$name = 'SignUpCtrl';
SignUpCtrl.$inject = ['$state'];