import addSongTpl from './addSong.html';
import songs from '../app.component';

let addSong = () => {
  return {
    template: addSongTpl,
    controller: 'AddSongCtrl',
    controllerAs: 'addSong'
  }
};
export default addSong;

const MODULE_NAME = 'addSong';

export class AddSongCtrl {
  constructor() {

    this.newSong = {};

    this.addSongClick = (newSong) => {
      this.songs.push(newSong);
      this.newSong = {};
    };
  }};