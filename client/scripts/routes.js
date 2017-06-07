import { _ } from 'meteor/underscore';
import { Config, Runner } from 'angular-ecmascript/module-helpers';
 
import loginTemplateUrl from '../templates/login.html';
import homeTemplateUrl from '../templates/home.html';
 
class RoutesConfig extends Config {
  
  constructor() {
    super(...arguments);
    this.isAuthorized = ['$auth', this.isAuthorized.bind(this)];
  }

  configure() {
    this.$stateProvider
      .state('login', {
        url: '/login',
        templateUrl: loginTemplateUrl,
        controller: 'LoginCtrl as logger'
      })
      .state('home', {
        url: '/home',
        templateUrl: homeTemplateUrl,
        controller: 'HomeCtrl as home',
        resolve: {
          user: this.isAuthorized
        }
      });

    this.$urlRouterProvider.otherwise('/login');
  }
  isAuthorized($auth) {
    return $auth.awaitUser();
  }
}
 
RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];  

class RoutesRunner extends Runner {
  run() {
    this.$rootScope.$on('$stateChangeError', (...args) => {
      const err = _.last(args);

      if (err === 'AUTH_REQUIRED') {
        this.$state.go('login');
      }
    });
  }
}

RoutesRunner.$inject = ['$rootScope', '$state'];

export default [RoutesConfig, RoutesRunner];