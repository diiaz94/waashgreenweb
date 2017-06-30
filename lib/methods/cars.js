import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Orders } from '../collections';
 

 Meteor.methods({
   insertCar( car ) {

   	if (!this.userId) { 
      throw new Meteor.Error('not-logged-in',
        'Debe estar autenticado para añadir un auto.'); 
    }

    check(car, { 
        color: String,
        patante: String,
        brand: String,
        model: String,
        pic: String,
        CartypeId: String
    });

    car.createdAt = moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); 
    Cars.insert(car); 
   },

   removeCar ( carID ){ 

    if (!this.userId) { 
      throw new Meteor.Error('not-logged-in',
        'Debe estar autenticado para eliminar un auto.'); 
    }

    check(carID, String);
    return Cars.remove({ _id : carID });

   },

   updateCar ( car ) { 

    check(order, { 
        color: String,
        patante: String,
        brand: String,
        model: String,
        pic: String,
        CartypeId: String,
        createdAt: Date
    });

    car.modifiedAt = moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); 
    Cars.update(
        { _id: car._id },
        car
    );
   } 
});