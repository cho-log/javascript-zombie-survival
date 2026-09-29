export default class GameView {
  constructor() {
    this.initializeScreenElements();
    this.initializeStatElements();
    this.initializeStatusElements();
    this.initializeButtonElements();
  }
  initializeScreenElements() {
    this.gameScreen = document.getElementById('game-screen');
    this.drawArea = document.getElementById('draw-area');
    this.resultScreen = document.getElementById('result-screen');
  }
  initializeStatElements() {
    this.dayElement = document.getElementById('day');
    this.heartElement = document.getElementById('hp');
    this.foodElement = document.getElementById('food');
    this.infectionRateElement = document.getElementById('infection');
    this.healingCountElement = document.getElementById('heal-attempts');
    this.rescuePointElement = document.getElementById('rescue-points');
  }
  initializeStatusElements() {
    this.remainingCardCountElement = document.getElementById('deck-remaining');
    this.loadingElement = document.getElementById('loading');
    this.logElement = document.getElementById('log');
    this.resultEndingElement = document.getElementById('result-ending');
  }
  initializeButtonElements() {
    this.drawButton = document.getElementById('btn-draw');
    this.choiceAButton = document.getElementById('btn-choice-a');
    this.choiceBButton = document.getElementById('btn-choice-b');
    this.giveUpButton = document.getElementById('btn-giveup');
    this.restartButton = document.getElementById('btn-restart');
  }
  renderGameScreen(gameState) {
    //게임 진행 화면
    this.dayElement.textContent = gameState.day;
    this.heartElement.textContent = gameState.heart;
    this.foodElement.textContent = gameState.food;
    this.infectionRateElement.textContent = gameState.infectionRate;
    this.healingCountElement.textContent = gameState.healingCount;
    this.rescuePointElement.textContent = gameState.rescuePoint;
    this.remainingCardCountElement.textContent = gameState.remainingCardCount;
  }
}
