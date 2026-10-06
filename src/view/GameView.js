const ENDING_MESSAGE = {
  hasGivenUp: '포기',
  dead: '사망',
  zombie: '좀비화',
  treatment: '치료 성공',
  rescue: '구조 성공',
  survive: '생존 성공',
};

export default class GameView {
  #gameScreen;
  #drawArea;
  #cardArea;
  #resultScreen;
  #dayElement;
  #heartElement;
  #foodElement;
  #infectionRateElement;
  #healingCountElement;
  #rescuePointElement;
  #remainingCardCountElement;
  #loadingElement;
  #logElement;
  #drawButton;
  #choiceAButton;
  #choiceBButton;
  #giveUpButton;
  #restartButton;
  #cardNameElement;
  #cardDescriptionElement;
  #choiceALabelElement;
  #choiceADescriptionElement;
  #choiceBLabelElement;
  #choiceBDescriptionElement;
  #resultEndingElement;
  #resultDaysElement;
  #resultHeartElement;
  #resultFoodElement;
  #resultInfectionRateElement;

  constructor() {
    this.initializeScreenElements();
    this.initializeStatElements();
    this.initializeStatusElements();
    this.initializeButtonElements();
    this.initializeCardElements();
    this.initializeResultElements();
  }

  initializeScreenElements() {
    this.#gameScreen = document.getElementById('game-screen');
    this.#drawArea = document.getElementById('draw-area');
    this.#cardArea = document.getElementById('card-area');
    this.#resultScreen = document.getElementById('result-screen');
  }

  initializeStatElements() {
    this.#dayElement = document.getElementById('day');
    this.#heartElement = document.getElementById('hp');
    this.#foodElement = document.getElementById('food');
    this.#infectionRateElement = document.getElementById('infection');
    this.#healingCountElement = document.getElementById('heal-attempts');
    this.#rescuePointElement = document.getElementById('rescue-points');
  }

  initializeStatusElements() {
    this.#remainingCardCountElement = document.getElementById('deck-remaining');
    this.#loadingElement = document.getElementById('loading');
    this.#logElement = document.getElementById('log');
  }

  initializeButtonElements() {
    this.#drawButton = document.getElementById('btn-draw');
    this.#choiceAButton = document.getElementById('btn-choice-a');
    this.#choiceBButton = document.getElementById('btn-choice-b');
    this.#giveUpButton = document.getElementById('btn-giveup');
    this.#restartButton = document.getElementById('btn-restart');
  }

  initializeCardElements() {
    this.#cardNameElement = document.getElementById('card-name');
    this.#cardDescriptionElement = document.getElementById('card-description');
    this.#choiceALabelElement = this.#choiceAButton.querySelector('.choice-label');
    this.#choiceADescriptionElement = this.#choiceAButton.querySelector('.choice-desc');
    this.#choiceBLabelElement = this.#choiceBButton.querySelector('.choice-label');
    this.#choiceBDescriptionElement = this.#choiceBButton.querySelector('.choice-desc');
  }

  initializeResultElements() {
    this.#resultEndingElement = document.getElementById('result-ending');
    this.#resultDaysElement = document.getElementById('result-days');
    this.#resultHeartElement = document.getElementById('result-hp');
    this.#resultFoodElement = document.getElementById('result-food');
    this.#resultInfectionRateElement = document.getElementById('result-infection');
  }

  //버튼 바인더
  bindDraw(handler) {
    this.#drawButton.addEventListener('click', handler);
  }

  bindChoice(handler) {
    this.#choiceAButton.addEventListener('click', () => handler('A')); //이벤트 등록 순간 실행 방지
    this.#choiceBButton.addEventListener('click', () => handler('B'));
  }

  bindGiveUp(handler) {
    this.#giveUpButton.addEventListener('click', handler);
  }

  bindRestart(handler) {
    this.#restartButton.addEventListener('click', handler);
  }

  renderStats(gameStats) {
    //게임 수치 표시
    this.#dayElement.textContent = gameStats.day;
    this.#heartElement.textContent = gameStats.heart;
    this.#foodElement.textContent = gameStats.food;
    this.#infectionRateElement.textContent = gameStats.infectionRate;
    this.#healingCountElement.textContent = gameStats.healingCount;
    this.#rescuePointElement.textContent = gameStats.rescuePoint;
    this.#remainingCardCountElement.textContent = gameStats.remainingCardCount;
  }

  renderCard(card) {
    //카드 정보 표시
    this.#cardNameElement.textContent = card.name;
    this.#cardDescriptionElement.textContent = card.description;
    this.#choiceALabelElement.textContent = card.choiceA.label;
    this.#choiceADescriptionElement.textContent = card.choiceA.description;
    this.#choiceBLabelElement.textContent = card.choiceB.label;
    this.#choiceBDescriptionElement.textContent = card.choiceB.description;
  }

  displayScreen(screen, isDisplay) {
    if (isDisplay) {
      screen.classList.remove('hidden'); //"class로 조작"
    } else {
      screen.classList.add('hidden');
    }
  }

  displayDrawScreen(isDisplay) {
    this.displayScreen(this.#drawArea, isDisplay);
    this.displayScreen(this.#cardArea, !isDisplay);
  }

  setLoading(isLoading) {
    this.displayScreen(this.#loadingElement, isLoading); //로딩화면

    this.#choiceAButton.disabled = isLoading; //선택버튼 활성,비활성
    this.#choiceBButton.disabled = isLoading;
  }

  addLog(message) {
    const logMessage = document.createElement('p');

    logMessage.append(message);
    this.#logElement.append(logMessage); //로그 메세지 추가
  }

  clearLog() {
    this.#logElement.textContent = ''; //로그 메세지 초기화
  }

  renderResult(result) {
    //결과 화면 표시
    this.#resultEndingElement.textContent = ENDING_MESSAGE[result.ending];
    this.#resultDaysElement.textContent = result.day;
    this.#resultHeartElement.textContent = result.heart;
    this.#resultFoodElement.textContent = result.food;
    this.#resultInfectionRateElement.textContent = result.infectionRate;

    this.displayScreen(this.#gameScreen, false);
    this.displayScreen(this.#resultScreen, true);
  }

  resetScreen() {
    //화면 초기화
    this.displayScreen(this.#resultScreen, false);
    this.displayScreen(this.#gameScreen, true);
    this.displayScreen(this.#drawArea, true);
    this.displayScreen(this.#cardArea, false);
    this.setLoading(false);
    this.clearLog();
  }
}
