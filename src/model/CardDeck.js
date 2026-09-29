import CARDS from './cards.js';

export default class CardDeck {
  constructor() {
    this.createCardDeck();
    this.shuffle();
  }
  createCardDeck() {
    this.cardDeck = []; //createCardDeck이 여러번 호출되도, 덱에 카드수가 초과하지않음
    CARDS.forEach((card) => {
      for (let i = 0; i < card.count; i++) this.cardDeck.push(card);
    });
  }
  shuffle() {
    //20장의 카드로 구성된 덱을 셔플하여 사용한다.
    for (let i = 0; i < this.cardDeck.length; i += 1) {
      const j = i + Math.floor(Math.random() * (this.cardDeck.length - i));
      [this.cardDeck[i], this.cardDeck[j]] = [this.cardDeck[j], this.cardDeck[i]];
    }
  }
  drawCard() {
    if (this.cardDeck.length === 0) {
      //덱이 소진되면 자동으로 리셔플된다.
      this.createCardDeck();
      this.shuffle();
    }
    return this.cardDeck.pop(); //덱의 마지막 카드를 빼고 반환
  }
  getRemainingCardCount() {
    return this.cardDeck.length; //현재 덱에 남은 카드 수는 화면에 실시간으로 표시된다.
  }
}
