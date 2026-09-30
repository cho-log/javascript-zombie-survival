import Game from '../model/Game.js';
import GameView from '../view/GameView.js';

export default class GameController {
  constructor() {
    this.game = new Game();
    this.gameView = new GameView();
    this.startGame(); //초기화
    this.gameView.bindDraw(() => this.handleDraw()); //핸들러 연결
    this.gameView.bindChoice((choice) => this.handleChoice(choice)); //A or B
    this.gameView.bindGiveUp(() => this.handleGiveUp());
    this.gameView.bindRestart(() => this.handleRestart());
  }
  startGame() {
    this.gameView.resetScreen(); //화면 초기화
    this.gameView.renderStats(this.game.getState()); //스텟 보이기
    this.gameView.addLog('생존 시작'); //게임 시작 시
  }

  handleDraw() {
    const nowCard = this.game.drawCard();

    this.gameView.renderCard(nowCard);
    this.gameView.renderStats(this.game.getState()); //남은 카드 수 업데이트
    this.gameView.addLog('카드를 뽑았습니다.'); //카드를 뽑았을 때
  }
  handleChoice() {}
  handleGiveUp() {}
  handleRestart() {}
}
