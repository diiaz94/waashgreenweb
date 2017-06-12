import { Mongo } from 'meteor/mongo';
 
CarTypes = new Mongo.Collection('CarTypes');
Supplies = new Mongo.Collection('Supplies');
Cars = new Mongo.Collection('Cars');
Users = new Mongo.Collection('Users');
Orders = new Mongo.Collection('Orders');

// export const CarTypes = new Mongo.Collection('CarTypes');
// export const Supplies = new Mongo.Collection('Supplies');
// export const Cars = new Mongo.Collection('Cars');
// export const Users = new Mongo.Collection('Users');
// export const Orders = new Mongo.Collection('Orders');