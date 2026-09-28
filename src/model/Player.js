const INITIAL_HEART = 100;
const INITIAL_FOOD = 3;
const INITIAL_INFECTION_RATE = 10;
const INITIAL_HEALING = 0;
const INITIAL_RESCUE_POINT = 0;

export default class Player {
  constructor() {
    this.heart = INITIAL_HEART; //최솟값 0
    this.food = INITIAL_FOOD; //최솟값 0
    this.infectionRate = INITIAL_INFECTION_RATE; //최솟값 0
    this.healing = INITIAL_HEALING;
    this.rescuePoint = INITIAL_RESCUE_POINT;
  }
  takeDamage(damageAmount) {
    this.heart = Math.max(0, this.heart - damageAmount);
  }
}
