const INITIAL_HEART = 100;
const INITIAL_FOOD = 3;
const INITIAL_INFECTION_RATE = 10;
const INITIAL_HEALING_COUNT = 0;
const INITIAL_RESCUE_POINT = 0;

export default class Player {
  #heart;
  #food;
  #infectionRate;
  #healingCount;
  #rescuePoint;

  constructor() {
    this.#heart = INITIAL_HEART; //최솟값 0
    this.#food = INITIAL_FOOD; //최솟값 0
    this.#infectionRate = INITIAL_INFECTION_RATE; //최솟값 0
    this.#healingCount = INITIAL_HEALING_COUNT;
    this.#rescuePoint = INITIAL_RESCUE_POINT;
  }

  takeDamage(damageAmount) {
    this.#heart = Math.max(0, this.#heart - damageAmount); //최솟값 0
  }
  heal(healingAmount) {
    this.#heart += healingAmount;
  }
  eatFood(foodAmount) {
    this.#food = Math.max(0, this.#food - foodAmount); //최솟값 0
  }
  addFood(foodAmount) {
    this.#food += foodAmount;
  }
  decreaseInfectionRate(infectionRateAmount) {
    this.#infectionRate = Math.max(0, this.#infectionRate - infectionRateAmount); //최솟값 0
  }
  increaseInfectionRate(infectionRateAmount) {
    this.#infectionRate += infectionRateAmount;
  }
  addHealingCount(healingCount) {
    this.#healingCount += healingCount;
  }
  addRescuePoint(rescuePoint) {
    this.#rescuePoint += rescuePoint;
  }

  getState() {
    return {
      heart: this.#heart,
      food: this.#food,
      infectionRate: this.#infectionRate,
      healingCount: this.#healingCount,
      rescuePoint: this.#rescuePoint,
    };
  }
}
