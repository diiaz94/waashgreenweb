import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Orders } from '../collections';
 

 Meteor.methods({
   insertOrder ( order ) {

   	if (!this.userId) { 
      throw new Meteor.Error('not-logged-in',
        'Debe estar autenticado para crear una orden.'); 
    }

    check(order, { 
      address: String,
      clientID: String,
      washerID: String,
      carId: String,
      latitude: String,
      longitude: String
    });

    order.createdAt = moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); 

    status: 'Nueva'; 
    Orders.insert(order); 
   
   },

   removeOrder(orderID){ 

    if (!this.userId) { 
      throw new Meteor.Error('not-logged-in',
        'Debe estar autenticado para cerrar una orden.'); 
    }

    check(orderId, String);

    return Orders.remove({ _id : orderId });
   },

   updateOrder ( order ) { 

    check(order, { 
      address: String,
      clientID: String,
      washerID: String,
      carId: String,
      latitude: String,
      longitude: String,
      createdAt: Date
    });

    oreder.modifiedAt = moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); 
    Orders.update(
        { _id: order._id },
        order
    );
   },

   updateStatus (orderId, newStatus){
    check(status, String);
    Orders.update(
      { _id: orderId },
      $set: {
        status: newStatus;
      }
    );

   }
});