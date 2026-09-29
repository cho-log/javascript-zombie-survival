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
}
