import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { CarTypes } from '../collections';
 

 Meteor.methods({
   insertCarType( carType ) {

   	if (!this.userId) { //Debe ser administrador
      throw new Meteor.Error('not-logged-in',
        'Debe estar autenticado para añadir un tipo de auto.'); 
    }

    check(carType, { 
        name: String,
        description: String,
        rate: Number
    });

    carType.createdAt = moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); 
    CarTypes.insert(carType); 
   },

   removeCarType ( carTypeID ){ 

    if (!this.userId) { 
      throw new Meteor.Error('not-logged-in',
        'Debe estar autenticado para eliminar un tipo de auto.'); 
    }

    check(carTypeID, String);
    return CarTypes.remove({ _id : carTypeID });

   },

   updateCarType ( carType ) { 

    check(carType, { 
        name: String,
        description: String,
        rate: Number,
        createdAt: Date
    });

    carType.modifiedAt = moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); 
    CarTypes.update(
        { _id: carType._id },
        car
    );
   }
});