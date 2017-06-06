// Libs
import Angular from 'angular';
import Loader from 'angular-ecmascript/module-loader';
import { Meteor } from 'meteor/meteor';
import 'angular-meteor';
import 'angular-meteor-auth';
import 'angular-moment';
import 'angular-sanitize';
import 'angular-ui-router';
 
// Modules
import LoginCtrl from '../controllers/login.controller';
import HomeCtrl from '../controllers/home.controller';
import CalendarFilter from '../filters/calendar.filter';
import RoutesConfig from '../routes';

import './material.min.js';
import './nouislider.min.js';
import './material-kit.js';

 
const App = 'WaashGreen';
 
// App
Angular.module(App, [
  'angular-meteor',
  'angular-meteor.auth',
  'angularMoment'
]);

new Loader(App)
  .load(LoginCtrl)
  .load(HomeCtrl)
  .load(CalendarFilter)
  .load(RoutesConfig);
 

Angular.element(document).ready(onReady);

 
function onReady() {
  Angular.bootstrap(document, [App]);
}