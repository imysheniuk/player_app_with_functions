import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from '../app.config'
import '../style/app.css';

angular.module('app', ['ui.router'])
  .config(routing);

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

// class AppCtrl {
//   constructor() {
//     this.url = 'https://github.com/preboot/angular-webpack';
//   }
// }

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', app)
  // .controller('AppCtrl', AppCtrl);
  .controller('AppCtrl', function($scope) {
    $scope.songs = [
      {name: 'SoundHelix Song 1', adress: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
      {name: 'SoundHelix Song 2', adress: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"},
      {name: 'SoundHelix Song 3', adress: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"},
      {name: 'SoundHelix Song 4', adress: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"},
      {name: 'SoundHelix Song 5', adress: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"},
      {name: 'SoundHelix Song 6', adress: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"},
      {name: 'SoundHelix Song 7', adress: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"},
      {name: 'SoundHelix Song 8', adress: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"}
    ];

    $scope.removeItem = (song) => {
      var answer = confirm("Are you sure to delete a song?")
      if (answer==true) {
        var index = $scope.songs.indexOf(song);    
        $scope.songs.splice(index, 1);
      }
    }

    $scope.newSong = {};

    $scope.addSong = (newSong) => {
      $scope.songs.push(newSong);
      $scope.newSong = "";
    }
  })
export default MODULE_NAME;
