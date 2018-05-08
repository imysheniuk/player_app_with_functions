import addSongTpl from './addSong.html';

let addSong = () => {
  return {
    template: addSongTpl,
    controller: 'AddSongCtrl',
    controllerAs: 'app'
  }
};
export default addSong;

const MODULE_NAME = 'addSong';

export class AddSongCtrl {
  constructor() {
    
  }};