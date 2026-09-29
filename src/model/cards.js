const CARDS = [
  {
    name: '생존자 시체',
    count: 4,
    description: '',
    choiceA: {
      label: '',
      description: '',
      effect: { food: 3, infectionRate: 8 },
    },
    choiceB: {
      label: '',
      description: '',
      effect: { food: 1 },
    },
  },
  {
    name: '부상당한 군인',
    count: 4,
    description: '',
    choiceA: {
      label: '',
      description: '',
      effect: { food: -1, infectionRate: -20, healingCount: 1 },
    },
    choiceB: {
      label: '',
      description: '',
      effect: { heart: -10, food: 2 },
    },
  },
  {
    name: '임시 수술',
    count: 3,
    description: '',
    choiceA: {
      label: '',
      description: '',
      effect: { heart: -25, infectionRate: -25, healingCount: 1 },
    },
    choiceB: {
      label: '',
      description: '',
      effect: { heart: -5, infectionRate: 10 },
    },
  },
  {
    name: '군용 차량 행렬',
    count: 3,
    description: '',
    choiceA: {
      label: '',
      description: '',
      effect: { rescuePoint: 1, infectionRate: 8 },
    },
    choiceB: {
      label: '',
      description: '',
      effect: { heart: 5 },
    },
  },
  {
    name: '오염된 웅덩이',
    count: 3,
    description: '',
    choiceA: {
      label: '',
      description: '',
      effect: { heart: 5, infectionRate: 15 },
    },
    choiceB: {
      label: '',
      description: '',
      effect: { heart: -10 },
    },
  },
  {
    name: '구조 트럭',
    count: 3,
    description: '',
    choiceA: {
      label: '',
      description: '',
      effect: { heart: -20, rescuePoint: 1 },
    },
    choiceB: {
      label: '',
      description: '',
      effect: { heart: 10 },
    },
  },
];

export default CARDS;
