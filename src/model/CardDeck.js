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
    this.cardDeck = [];
    this.createCardDeck();
  }
  createCardDeck() {
    CARDS.forEach((card) => {
      for (let i = 0; i < card.count; i++) this.cardDeck.push(card);
    });
  }
}
