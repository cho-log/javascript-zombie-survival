const INITIAL_HEART = 100;
const INITIAL_FOOD = 3;
const INITIAL_INFECTION_RATE = 10;
const INITIAL_HEALING = 0;
const INITIAL_RESCUE_POINT = 0;

export default class Player {
  constructor() {
    this.heart = INITIAL_HEART;
    this.food = INITIAL_FOOD;
    this.infectionRate = INITIAL_INFECTION_RATE;
    this.healing = INITIAL_HEALING;
    this.rescuePoint = INITIAL_RESCUE_POINT;
  }
}
