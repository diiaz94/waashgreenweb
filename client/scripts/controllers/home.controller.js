import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';

import { CarTypes, Supplies, Cars, Orders } from '../../../lib/collections';

 
export default class HomeCtrl extends Controller {
  constructor() {
    super(...arguments);

 	  Meteor.subscribe('users');

    Meteor.subscribe('allCarTypes');
    Meteor.subscribe('allSupplies');
    Meteor.subscribe('allCars');
    Meteor.subscribe('allOrders');

    this.helpers({
      users() {
        return Meteor.users.find();
      },
      CarTypes() {
        return CarTypes.find();
      },
      Supplies() {
        return Supplies.find();
      },
      Cars() {
        return Cars.find();
      },
      Orders() {
        return Orders.find();
      }
    });
    console.log(this.currentUser);
 $('body').bootstrapMaterialDesign();
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
        toastr.success("registro eliminado exitosamente");
      }
      else {
        toastr.success("error al eliminar registro");
      }
    });
    
  }

}
 
HomeCtrl.$name = 'HomeCtrl';
HomeCtrl.$inject = ['$state'];