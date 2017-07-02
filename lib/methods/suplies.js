import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Supplies } from '../collections';
 

 Meteor.methods({
   insertSupply( supply ) {

   	if (!this.userId) { //Debe ser administrador
      throw new Meteor.Error('not-logged-in',
        'Debe estar autenticado para añadir un suministro.'); 
    }

    check(supply, { 
        name: String,
        description: String,
        unidadMedida: String
    });

    supply.createdAt = moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); 
    Supplies.insert(supply); 
   },

   removeSupply ( supplyID ){ 

    if (!this.userId) { 
      throw new Meteor.Error('not-logged-in',
        'Debe estar autenticado para eliminar un suministro.'); 
    }

    check(supplyID, String);
    return Supplies.remove({ _id : supplyID });

   },

   updateSupply ( supply ) { 

    check(supply, { 
        name: String,
        description: String,
        unidadMedida: String,
        createdAt: Date
    });

    supply.modifiedAt = moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); 
    Supplies.update(
        { _id: supply._id },
        supply
    );
   }
});