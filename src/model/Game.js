import CardDeck from './CardDeck.js';
import Player from './Player.js';

export default class Game {
  constructor() {
    this.cardDeck = new CardDeck();
    this.player = new Player();
    this.day = 1; //경과된 일자
    this.nowCard = null; //현재 뽑은 카드
    this.hasGivenUp = false; //포기여부
    this.isStarving = false; //기아여부
  }
  drawCard() {
    this.nowCard = this.cardDeck.drawCard(); //뽑은 카드 저장
    return this.nowCard;
  }
  selectChoice(choice) {
    if (choice === 'A')
      return this.nowCard.choiceA; //A 선택시
    else return this.nowCard.choiceB; //B 선택시
  }
  applyEffect(effect) {
    //값이 없으면 0 입력
    this.applyHeartEffect(effect.heart ?? 0);
    this.applyFoodEffect(effect.food ?? 0);
    this.applyInfectionRateEffect(effect.infectionRate ?? 0);
    this.player.addHealingCount(effect.healingCount ?? 0);
    this.player.addRescuePoint(effect.rescuePoint ?? 0);
  }
  applyHeartEffect(heartChange) {
    if (0 < heartChange) this.player.heal(heartChange);
    else if (heartChange < 0) this.player.takeDamage(-heartChange);
  }
  applyFoodEffect(foodChange) {
    if (0 < foodChange) this.player.addFood(foodChange);
    else if (foodChange < 0) this.player.eatFood(-foodChange);
  }
  applyInfectionRateEffect(infectionRateChange) {
    if (0 < infectionRateChange) this.player.increaseInfectionRate(infectionRateChange);
    else if (infectionRateChange < 0) this.player.decreaseInfectionRate(-infectionRateChange);
  }

  processDay(choice) {
    this.applyEffect(this.selectChoice(choice).effect); //카드 효과가 적용된다
    this.isStarving = this.player.getState().food === 0; //현재 식량이 0인지 확인한다 (기아 판정)
    this.player.eatFood(1); //식량 1이 소비된다
    this.player.increaseInfectionRate(3); //감염도가 3 증가한다
    if (this.isStarving) this.player.takeDamage(10); //2번에서 식량이 0이었다면, 체력이 10 추가 감소한다

    this.nowCard = null; //카드 비우기
    this.day += 1; //날짜 증가
  }

  setGiveUp() {
    this.hasGivenUp = true;
  }

  getIsStarving() {
    return this.isStarving;
  }

  getEnding() {
    const playerState = this.player.getState();

    if (this.hasGivenUp) return 'hasGivenUp'; //포기
    if (playerState.heart <= 0) return 'dead'; //사망
    if (100 <= playerState.infectionRate) return 'zombie'; //좀비화
    if (5 <= playerState.healingCount) return 'treatment'; //치료5회
    if (3 <= playerState.rescuePoint && 10 < this.day) return 'rescue'; //구조포인트3회 + 10일초과
    if (15 < this.day) return 'survive'; //15일초과
    return null;
  }
  getState() {
    //화면렌더용
    const playerState = this.player.getState();

    return {
      day: this.day,
      heart: playerState.heart,
      food: playerState.food,
      infectionRate: playerState.infectionRate,
      healingCount: playerState.healingCount,
      rescuePoint: playerState.rescuePoint,
      remainingCardCount: this.cardDeck.getRemainingCardCount(),
    };
  }
  getResult() {
    //결과화면용
    const playerState = this.player.getState();

    return {
      day: this.day - 1,
      heart: playerState.heart,
      food: playerState.food,
      infectionRate: playerState.infectionRate,
      ending: this.getEnding(),
    };
  }
}
