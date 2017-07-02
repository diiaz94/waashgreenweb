import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';
 

 Meteor.methods({

  findUser () {

  	debugger;

		if (!this.userId) { 
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
   
  },

  completeUser (completeUser) {
		if (!this.userId) {
			throw new Meteor.Error('not-logged-in',
			  'Must be logged to remove.'); //lanza excepcion al front
		}
		
		var profile = Meteor.user().profile;


		profile.phone = completeUser.phone;
		profile.rut = completeUser.rut;
		profile.isComplete = true;

		Meteor.users.update(this.userId, {$set: {profile: profile, password:completeUser.password}});



		return 1;

  }


});

