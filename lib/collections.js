import { Mongo } from 'meteor/mongo';
 
CarTypes = new Mongo.Collection('CarTypes');
Supplies = new Mongo.Collection('Supplies');
Cars = new Mongo.Collection('Cars');
Orders = new Mongo.Collection('Orders');

// export const CarTypes = new Mongo.Collection('CarTypes');
// export const Supplies = new Mongo.Collection('Supplies');
// export const Cars = new Mongo.Collection('Cars');
// export const Orders = new Mongo.Collection('Orders');

//TODO: Buscar para que sirve el export.

//Recuerda colocar esos 'export' para que luego los puedan acceder otros .js

//la coleccion users no la crearemos nosotros, ya que meteor provee un manejo de usuarios
//el cual provee cosas como la encriptacion de los password, el login con facebook
//entre otros beneficios, asi que esa coleccion la trataremos un poco diferente, por ahora 
//borrala de aqui, y comenta el insert de fixtures para no generar posibles conflictos =)
//yo me encargo de eso.