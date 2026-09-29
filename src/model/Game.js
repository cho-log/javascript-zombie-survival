import CardDeck from './CardDeck.js';
import Player from './Player.js';

export default class Game {
  constructor() {
    this.cardDeck = new CardDeck();
    this.player = new Player();
    this.day = 1;
    this.nowCard = {};
  }
}
