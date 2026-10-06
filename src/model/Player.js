const INITIAL_HEART = 100;
const INITIAL_FOOD = 3;
const INITIAL_INFECTION_RATE = 10;
const INITIAL_HEALING_COUNT = 0;
const INITIAL_RESCUE_POINT = 0;
const INFECTION_RATE_THRESHOLD = 100;
const HEALING_COUNT_THRESHOLD = 5;
const RESCUE_POINT_THRESHOLD = 3;

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

  changeHeart(amount) {
    this.#heart = Math.max(0, this.#heart + amount); //최솟값 0
  }
  changeFood(amount) {
    this.#food = Math.max(0, this.#food + amount); //최솟값 0
  }
  changeInfectionRate(amount) {
    this.#infectionRate = Math.max(0, this.#infectionRate + amount); //최솟값 0
  }
  addHealingCount(healingCount) {
    this.#healingCount += healingCount;
  }
  addRescuePoint(rescuePoint) {
    this.#rescuePoint += rescuePoint;
  }

  isDead() {
    return this.#heart <= 0;
  }
  isZombie() {
    return INFECTION_RATE_THRESHOLD <= this.#infectionRate;
  }
  hasHealed() {
    return HEALING_COUNT_THRESHOLD <= this.#healingCount;
  }
  hasEnoughRescuePoints() {
    return RESCUE_POINT_THRESHOLD <= this.#rescuePoint;
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
