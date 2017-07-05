import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Controller } from 'angular-ecmascript/module-helpers';

export default class BeWaasherCtrl extends Controller {
  constructor() {
    super(...arguments);


    //this.$state.go('home');
    
 $('body').bootstrapMaterialDesign();
    this.helpers({

    });
  }
  
submit(user){
    if($(".step1").is(":visible")){
      $(".step1").hide();
      $(".step2").show();
    }
    else if($(".step2").is(":visible")){
      this.beWaasher();
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

}
 
BeWaasherCtrl.$name = 'BeWaasherCtrl';
BeWaasherCtrl.$inject = ['$state'];