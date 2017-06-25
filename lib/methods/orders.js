import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Orders } from '../collections';
 

 Meteor.methods({

      
   insertOrder ( order ) {

   	if (!this.userId) { //verifica que el usuario esta logado, no es necesario para todos, por ejemplo en el registro
      throw new Meteor.Error('not-logged-in',
        'Must be logged to remove a chat.'); //lanza excepcion al front
    }
    //this.userId -> es el ID del usuario actual

    check(order, { //chequea que el objeto 'order' es del tipo esperado en base de datos, en caso contrario causara execion
      address: String,
      clientID: String,
      washerID: String,
      carId: String,
      latitude: String,
      longitude: String
    });

    var today = new Date();

    order.createdAt = today; //Verifica si este atributo lo crea mongo por defecto al insertar o hay que asignarlo manual, no estoy seguro
    requestDate = today;
    requestHour: today.getHours()+":"+today.getMinutes(); //seguro hay una mejor forma de hacerlo con la libreria moments que ya esta instalada, moment.format('LTS') creo

    status: 'En Proceso'; //siempre se creara con este status?
    Orders.insert(order); //se inserta en base de datos el json que llego por parametros y que deberia de cumplir con todas las restricciones
   
   },

   otherMethodOrder ( params ) { //esto lo coloque de ejemplo, borras estos comentarios xD

   }

});