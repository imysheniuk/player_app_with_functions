import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular';
import routing from '../app.config'
import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', app)
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
      let answer = confirm("Are you sure to delete a song?")
      if (answer==true) {
        let index = $scope.songs.indexOf(song);    
        $scope.songs.splice(index, 1);
      }
    }

    // $scope.init = () => {
    //   $scope.songs = JSON.parse(localStorage.getItem('playlist'));
    // };
    // $scope.init();

    $scope.newSong = {};

    $scope.addSong = (newSong) => {
      $scope.songs.push(newSong);
        localStorage.setItem('playlist', JSON.stringify($scope.songs));
        $scope.newSong = {};
    };

    $scope.dblPlay = (event) => {
      event.target.parentElement.children[1].children[0].play();
    };

    let findNodeIndex = (node) => {                                                         //defines index of node in parent node
      let i = 0;
      while (node = node.previousSibling){
        if (node.nodeType === 1) { ++i }
      }
      return i;
    };

    document.addEventListener('play', function(event){
      let audios = document.getElementsByTagName('audio');
      for(let i = 0, len = audios.length; i < len; i++){
        if(audios[i] !== event.target){
          audios[i].pause();
        }
      }
    }, true);

    document.addEventListener('ended', function(event){
      let audios = document.getElementsByTagName('audio');
      let currentSongId = findNodeIndex(event.target.parentElement.parentElement);
      if(currentSongId == (audios.length -1)){
        audios[0].play();
      } else {
        audios[currentSongId + 1].play();        
      }
    }, true);

    // $scope.on('ended', args => {
    // })
    // $scope.emit('ended', {index: currentSongId});
  });

export default MODULE_NAME;
