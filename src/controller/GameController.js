import Game from '../model/Game.js';
import GameView from '../view/GameView.js';

export default class GameController {
  #game;
  #gameView;

  constructor() {
    this.#game = new Game();
    this.#gameView = new GameView();
    this.startGame(); //초기화
    this.#gameView.bindDraw(() => this.handleDraw()); //핸들러 연결
    this.#gameView.bindChoice((choice) => this.handleChoice(choice)); //A or B
    this.#gameView.bindGiveUp(() => this.handleGiveUp());
    this.#gameView.bindRestart(() => this.handleRestart());
  }

  startGame() {
    this.#game.resetGame(); //게임 초기화
    this.#gameView.resetScreen(); //화면 초기화
    this.#gameView.renderStats(this.#game.getState()); //스텟 보이기
    this.#gameView.addLog('생존 시작'); //게임 시작 시
  }

  handleDraw() {
    const nowCard = this.#game.drawCard();

    this.#gameView.renderCard(nowCard); //카드 정보 업데이트
    this.#gameView.displayDrawScreen(false); //카드 영역 보이기
    this.#gameView.renderStats(this.#game.getState()); //남은 카드 수 업데이트
    this.#gameView.addLog('카드를 뽑았습니다.'); //카드를 뽑았을 때
  }

  handleChoice(choice) {
    this.#gameView.setLoading(true);
    this.#gameView.addLog('선택하였습니다.'); //선택지를 골랐을 때

    setTimeout(() => this.finishChoice(choice), 2000);
  }
  finishChoice(choice) {
    this.#game.processDay(choice);
    if (this.#game.getIsStarving()) this.#gameView.addLog('식량이 없어'); //기아가 발생했을 때
    this.#gameView.setLoading(false);
    this.#gameView.renderStats(this.#game.getState()); //선택 결과 업데이트

    if (this.#game.getEnding() !== null) {
      this.#gameView.renderResult(this.#game.getResult()); //게임 종료
      return;
    }
    //게임 진행
    this.#gameView.displayDrawScreen(true); //카트 영역 감추기
  }

  handleGiveUp() {
    this.#game.setGiveUp();
    this.#gameView.renderResult(this.#game.getResult()); //게임 종료
  }

  handleRestart() {
    this.startGame();
  }
}
