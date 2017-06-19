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
import SignUpCtrl from '../controllers/sign-up.controller';
import BeWaasherCtrl from '../controllers/be-waasher.controller';
import HomeCtrl from '../controllers/home.controller';
import CalendarFilter from '../filters/calendar.filter';
import RoutesConfig from '../routes';

 
const App = 'WaashGreen';
 
// App
Angular.module(App, [
  'angular-meteor',
  'angular-meteor.auth',
  'angularMoment',
  'ui.router'
]);

new Loader(App)
  .load(LoginCtrl)
  .load(SignUpCtrl)
  .load(BeWaasherCtrl)
  .load(HomeCtrl)
  .load(CalendarFilter)
  .load(RoutesConfig);
 

Angular.element(document).ready(onReady);

 
function onReady() {
  Angular.bootstrap(document, [App]);
}