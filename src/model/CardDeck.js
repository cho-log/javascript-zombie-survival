const CARDS = [
  { name: '생존자 시체', count: 4, selectA: { food: 3, infectionRate: 8 }, selectB: { food: 1 } },
  { name: '부상당한 군인', count: 4, selectA: { food: -1, infectionRate: -20, healingCount: 1 }, selectB: { heart: -10, food: 2 } },
  { name: '임시 수술', count: 3, selectA: { heart: -25, infectionRate: -25, healingCount: 1 }, selectB: { heart: -5, infectionRate: 10 } },
  { name: '군용 차량 행렬', count: 3, selectA: { rescuePoint: 1, infectionRate: 8 }, selectB: { heart: 5 } },
  { name: '오염된 웅덩이', count: 3, selectA: { heart: 5, infectionRate: 15 }, selectB: { heart: -10 } },
  { name: '구조 트럭', count: 3, selectA: { heart: -20, rescuePoint: 1 }, selectB: { heart: 10 } },
];

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
    for (let i = 0; i < this.cardDeck.length; i += 1) {
      const j = i + Math.floor(Math.random() * (this.cardDeck.length - i));
      [this.cardDeck[i], this.cardDeck[j]] = [this.cardDeck[j], this.cardDeck[i]];
    }
  }
}
