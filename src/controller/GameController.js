import Game from '../model/Game.js';
import GameView from '../view/GameView.js';

export default class GameController {
  constructor() {
    this.game = new Game();
    this.gameView = new GameView();
    this.startGame();
  }
  startGame() {
    this.gameView.resetScreen(); //화면 초기화
    this.gameView.renderStats(this.game.getState()); //스텟 보이기
    this.gameView.addLog('생존 시작'); //게임 시작 시
  }
}
