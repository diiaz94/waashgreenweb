import { Tasks } from '../lib/collections';

/* Seed to start the app */

/* CARS TYPES */
if ( CarTypes.find().count() === 0 ) {
  CarTypes.insert({
      _id: "1",
      name: 'City Car',
      description: 'Pequeño',
      rate: 5000,
  });
  CarTypes.insert({
      _id: "2",
      name: 'Sedan',
      description: 'Mediano',
      rate: 5000,
  });
  CarTypes.insert({
      _id: "3",
      name: 'Jeep 2',
      description: 'Grande',
      rate: 5000,
  });
  CarTypes.insert({
      _id: "4",
      name: 'Jeep 3',
      description: 'Muy grande',
      rate: 5000,
  });
}
/* SUPPLIES */
if ( Supplies.find().count() === 0 ) {
  Supplies.insert({
    _id:"1",
    name: 'Jabón auto',
    description: 'Carga de líquido para lavado de Autos',
    unidadMedida: 'Mililitros'
  });
  Supplies.insert({
    _id: "2",
    name: 'Jabón llanta',
    description: 'Carga de líquido para lavado de llantas',
    unidadMedida: 'Mililitros'
  });
  Supplies.insert({
    _id: "3",
    name: 'Aspiradora',
    description: 'Aspiradora de interiores de auto',
    unidadMedida: 'Unidad'
  });
  Supplies.insert({
    _id: "4",
    name: 'Toalla de Limpieza',
    description: 'Toalla de Limpieza',
    unidadMedida: 'Pack de 10 unidades'
  });
}

/* CARS */
if ( Cars.find().count() === 0){
  Cars.insert({
    color: 'Negro',
    patante: '123ABC',
    brand: 'Chevrolet',
    model: 'Optra',
    pic: 'location.com/auto.pic',
    CartypeId: "1"
  });

  Cars.insert({
    color: 'Rojo',
    patante: '234BCD',
    brand: 'Jeep',
    model: 'Machito',
    pic: 'location.com/auto2.pic',
    CartypeId: "3"
  });
}

/* USERS */
if ( Users.find().count() === 0 ) {
  Users.insert({
    _id: "1",
    firstName: 'Pedro',
    lastName: 'Polidor',
    email: 'pedro.polidor@gmail.com',
    password: '12345678', //This should change when we use crypt.
    rut: '12.123.123-1', //Rut Format.
    region: 'Arica y Parinacota',
    comuna: 'Arica',
    phone: '02-123-1234',
    rol: 'Administrador'
  });

  Users.insert({
    _id: "2",
    firstName: 'Misael',
    lastName: 'Diaz',
    email: 'misael.diaz@gmail.com',
    password: '12345678', //This should change when we use crypt.
    rut: '12.123.123-2', //Rut Format.
    region: 'Antofagasta',
    comuna: 'Mejillones',
    phone: '02-123-1234',
    rol: 'Cliente',
    cars: ["1","2"]
  });

  Users.insert({
    _id: "3",
    firstName: 'Alejandro',
    lastName: 'Perez',
    email: 'alejandro.perez@gmail.com',
    password: '12345678', //This should change when we use crypt.
    rut: '12.123.123-3', //Rut Format.
    region: 'Antofagasta',
    comuna: 'Mejillones',
    phone: '02-123-1234',
    rol: 'Proveedor',
    dateOfBirth: '24-12-1980',
    originalCountry: 'Chile',
    profilePic: 'location.com/profilepic',
    rutPicFront: 'location.com/rutFront',
    rutPicBack: 'location.com/rutPicBack',
    pastRecord: 'location.com/pastRecord',
    supplies: [
      {
        supplyId: "1",
        quantity: 250,
        deliveryDate: '06-06-2017',
        observacion: 'Entregado con retraso'
      },
      {
        supplyId: "2",
        quantity: 50,
        deliveryDate: '06-06-2017',
        observacion: 'Entregado con retraso'
      },
      {
        supplyId: "3",
        quantity: 1,
        deliveryDate: '06-06-2017',
        observacion: 'Entregado con retraso'
      },
      {
        supplyId: "4",
        quantity: 2,
        deliveryDate: '06-06-2017',
        observacion: 'Entregado con retraso'
      }
    ]
  });
}

/* ORDERS */
if ( Orders.find().count() === 0 ) {
  Orders.insert({
    createdAt: '06-06-2017',
    requestDate: '08-06-2017',
    requestHour: '21:00',
    address: 'Av. Ferreira. Edif. Lucia. Estacionamiento S1.',
    clientID: "2",
    washerID: "3",
    carId: "1",
    latitude: '-5422588',
    longitude: '3544944',
    status: 'En Proceso'
  });
}