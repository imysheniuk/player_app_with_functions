import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';

export default angular.module('home', [uirouter])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;


//   const MODULE_NAME = 'app';

// angular.module(MODULE_NAME, [])
//   .directive('app', app)
//   .controller('AppCtrl', AppCtrl);

// export default home;
