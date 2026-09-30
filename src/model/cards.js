const CARDS = [
  {
    name: '생존자 시체',
    count: 4,
    description: '피를 흘리며 쓰러진 사람이 보인다. 다가가 보자.',
    choiceA: {
      label: '시체의 옷 주머니를 뒤진다',
      description: '식량 +3, 감염도 +8',
      effect: { food: 3, infectionRate: 8 },
    },
    choiceB: {
      label: '시체 옆의 가방을 뒤진다',
      description: '식량 +1',
      effect: { food: 1 },
    },
  },
  {
    name: '부상당한 군인',
    count: 4,
    description: '다리가 부러진 의무병이 보인다. 잃어버린 전투식량을 찾고 있다. ',
    choiceA: {
      label: '군인에게 나의 식량을 준다.',
      description: '식량 -1, 감염도 -20, 치료 +1',
      effect: { food: -1, infectionRate: -20, healingCount: 1 },
    },
    choiceB: {
      label: '군인에게 식량을 어디서 잃어버렸는지 묻고 찾아본다',
      description: '체력 -10, 식량 +2',
      effect: { heart: -10, food: 2 },
    },
  },
  {
    name: '임시 수술',
    count: 3,
    description: '무기를 휘두르다 팔에 깊은 상처가 생겼다. 수술을 해야할까.',
    choiceA: {
      label: '수술한다',
      description: '체력 -25, 감염도 -25, 치료 +1',
      effect: { heart: -25, infectionRate: -25, healingCount: 1 },
    },
    choiceB: {
      label: '수술하지 않는다',
      description: '체력 -5, 감염도 +10',
      effect: { heart: -5, infectionRate: 10 },
    },
  },
  {
    name: '군용 차량 행렬',
    count: 3,
    description: '군용 차량이 줄줄이 지나간다. 어디로 가는걸까.',
    choiceA: {
      label: '군용 차량에 다가간다.',
      description: '구조 +1, 감염도 +8',
      effect: { rescuePoint: 1, infectionRate: 8 },
    },
    choiceB: {
      label: '가만히 있는다.',
      description: '체력 +5',
      effect: { heart: 5 },
    },
  },
  {
    name: '오염된 웅덩이',
    count: 3,
    description: '목이 너무 마르다. 눈 앞에는 더러워 보이는 물 웅덩이가 있다.',
    choiceA: {
      label: '물을 마신다',
      description: '체력 +5, 감염도 +15',
      effect: { heart: 5, infectionRate: 15 },
    },
    choiceB: {
      label: '물을 마시지 않는다',
      description: '체력 -10',
      effect: { heart: -10 },
    },
  },
  {
    name: '구조 트럭',
    count: 3,
    description: '재난 구조 트럭이 지나간다. 따라가 볼까.',
    choiceA: {
      label: '트럭쪽을 뛰어가 도움을 청한다',
      description: '체력 -20, 구조 +1',
      effect: { heart: -20, rescuePoint: 1 },
    },
    choiceB: {
      label: '트럭에서 떨어진 구급상자를 줍는다',
      description: '체력 +10',
      effect: { heart: 10 },
    },
  },
];

export default CARDS;
