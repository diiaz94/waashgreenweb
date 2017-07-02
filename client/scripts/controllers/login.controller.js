import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Controller } from 'angular-ecmascript/module-helpers';



export default class LoginCtrl extends Controller {
  constructor() {
    super(...arguments);


    const $scope = this;
    Meteor.subscribe('users');
    $scope.loadingLogin = true;
   $('body').bootstrapMaterialDesign();
    $scope.$timeout(function(){$scope.showContentMain($scope)},1000);

  }

  showContentMain($scope) { //hide splash
    $scope.loadingLogin=false;
  }


  login (user) {
  	if (_.isEmpty(user) || _.isEmpty(user.username) || _.isEmpty(user.password) ) {
      toastr.error("Por favor rellene todos los campos");
    }
 		Meteor.loginWithPassword(user.username, user.password, (err) => {
      if (err) {
        toastr.error("Ha ocurrido un error! Intente nuevamente");
      }
      else {
        this.$state.go('home');
      }
    });
   
  }

  loginWithFacebook () {
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

  beWaasher() {
    this.$state.go('be-waasher');
  }


}
 
LoginCtrl.$name = 'LoginCtrl';
LoginCtrl.$inject = ['$state', '$timeout'];

