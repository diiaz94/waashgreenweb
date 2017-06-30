import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Orders } from '../collections';
 

 Meteor.methods({
   insertOrder ( order ) {

   	if (!this.userId) { //verifica que el usuario esta logado, no es necesario para todos, por ejemplo en el registro
      throw new Meteor.Error('not-logged-in',
        'Debe estar autenticado para crear una orden.'); //lanza excepcion al front
    }

    check(order, { //chequea que el objeto 'order' es del tipo esperado en base de datos, en caso contrario causara execion
      address: String,
      clientID: String,
      washerID: String,
      carId: String,
      latitude: String,
      longitude: String,
      // requestDate: Date, //Esto lo proporciona el usuario mediante un date picker
      // requestHour: '21:00', //Igual acá
    });

    order.createdAt = moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); 

    status: 'Nueva'; 
    Orders.insert(order); 
   
   },

   removeOrder(orderID){ //Este método no sé si tiene sentido que se use.

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
      // requestDate: Date, //Esto lo proporciona el usuario mediante un date picker
      // requestHour: '21:00', //Igual acá
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
//Solo podran usar este metodo los washer?
    Orders.update(
      { _id: orderId },
      $set: {
        status: newStatus;
      }
    );

   }
});