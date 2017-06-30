import { Meteor } from 'meteor/meteor';
import { Tasks } from '../lib/collections';

// Meteor.publish('users', function() {
//   return Meteor.users.find({}, { fields: { profile: 1 } });
// });


Meteor.publish('allCarTypes', function(){
	return CarTypes.find();
});

Meteor.publish('allSupplies', function(){
	return Supplies.find();
});

Meteor.publish('clientCars', function(){
	//PREGUNTAR LO DE LA BASE DE DATOS
	currentUser = this.userId;
	return Cars.find({ userId: currentUser });
});

Meteor.publish('allOrders', function(){	//Solo se suscribe el administrador
	return Orders.find();
});

Meteor.publish('washerOrders', function(){
	//¿Verificamos aqui de una vez el rol?	
	currentUser = this.userId;
	return Orders.find({ washerId: currentUser });
});

Meteor.publish('clientOrders', function(){	
	currentUser = this.userId;
	return Orders.find({ clientId: currentUser });
});