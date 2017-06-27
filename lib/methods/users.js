import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Orders } from '../collections';
 

 Meteor.methods({

  findUser () {

  	debugger;

		if (!this.userId) { //verifica que el usuario esta logado, no es necesario para todos, por ejemplo en el registro
		throw new Meteor.Error('not-logged-in',
		  'Must be logged to remove a chat.'); //lanza excepcion al front
		}

		var users = Meteor.users.find();

		return users;
   
  },
  deleteUser (userId) {

  	debugger;

	if (!this.userId) {
	throw new Meteor.Error('not-logged-in',
	  'Must be logged to remove.'); //lanza excepcion al front
	}

	return Meteor.users.remove({ _id : userId });
   
  }


});

