import { Mongo } from 'meteor/mongo';
 
export const CarTypes = new Mongo.Collection('CarTypes');
export const Supplies = new Mongo.Collection('Supplies');
export const Cars = new Mongo.Collection('Cars');
export const Orders = new Mongo.Collection('Orders');