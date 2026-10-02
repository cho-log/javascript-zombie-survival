import GameViewModel from "./viewModel/GameViewModel.js";
import GameView from "./view/GameView.js";

const gameViewModel= new GameViewModel();
const gameView=new GameView(gameViewModel);

gameView.bindEvents();


