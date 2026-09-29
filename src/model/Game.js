import CardDeck from './CardDeck.js';
import Player from './Player.js';

export default class Game {
  constructor() {
    this.cardDeck = new CardDeck();
    this.player = new Player();
    this.day = 1; //경과된 일자
    this.nowCard = null; //현재 뽑은 카드
  }
  drawCard() {
    this.nowCard = this.cardDeck.drawCard();
    return this.nowCard;
  }
  selectChoice(choice) {
    if (choice === 'A')
      return this.nowCard.selectA; //A 선택시
    else return this.nowCard.selectB; //B 선택시
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
}
