import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Controller } from 'angular-ecmascript/module-helpers';
import { initMaterialKit } from '../lib/material-kit';



export default class SignUpCtrl extends Controller {
  constructor() {
    super(...arguments);
    initMaterialKit();
  }

  
  submit(user){
    if($(".step1").is(":visible")){
      $(".step1").hide();
      $(".step2").show();
    }
    else if($(".step2").is(":visible")){
      this.signup();
    }

  }

  goToLogin(){
   this.$state.go('home');
  }

  registerWithFacebook () {
    Meteor.loginWithFacebook({
      requestPermissions: ['public_profile', 'email']
    }, (err) => {
      if (err) {
        console.log(err.reason);
        toastr.error("Ha ocurrido un error! Intente nuevamente");
      } else {
        toastr.success("Inicio exitoso de sessión");
        if (Meteor.user().profile.isComplete) {
          this.$state.go('home');
        }
        else {
         this.$state.go('complete'); 
        }
      }
    });
  }
  
  signup () {

    if (_.isEmpty(this.user.username) || _.isEmpty(this.user.password) ) return;

    var options = {
      username: this.user.username,
      email: this.user.username,
      password: this.user.password,
      profile: {
        email: this.user.username,
        createdOn: new Date(),
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        rut: this.user.rut,
        region : "", //TODO: falta
        comuna :"", //TODO: Falta
        phone: this.user.phone,
        rol: "Cliente"
      }
    };

    Accounts.createUser(options, (err) => {
        if (err) {
          console.log('Login error - ', err);
          toastr.error(err.reason);
          return;
        } 
        this.$state.go('sign-up-completed');
    });
  }

}
 
SignUpCtrl.$name = 'SignUpCtrl';
SignUpCtrl.$inject = ['$state'];