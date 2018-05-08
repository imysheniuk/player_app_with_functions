import appTpl from './app.html';

let app = () => {
  return {
    template: appTpl,
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};
export default app;

const MODULE_NAME = 'app';

export class AppCtrl {
  constructor() {
    this.songs = [
      {name: 'SoundHelix Song 1', adress: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
      {name: 'SoundHelix Song 2', adress: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"},
      {name: 'SoundHelix Song 3', adress: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"},
      {name: 'SoundHelix Song 4', adress: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"},
      {name: 'SoundHelix Song 5', adress: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"},
      {name: 'SoundHelix Song 6', adress: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"},
      {name: 'SoundHelix Song 7', adress: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"},
      {name: 'SoundHelix Song 8', adress: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"}
    ];
  }};