import Deck from "../model/Deck.js"
import Player from "../model/Player.js";

export default class GameViewModel {
    constructor() {
        this.deck = new Deck();
        this.player = new Player();
        this.card = null;
    }
    drawCard() {
        const getCard = this.deck.drawCard();
        this.card = getCard.card;
        return {
            name: this.card.name,
            description: this.card.description,
            aDescription: this.card.choice[0].aDescription,
            aEffectDescription: this.card.choice[0].aEffectDescription,
            bDescription: this.card.choice[1].bDescription,
            bEffectDescription: this.card.choice[1].bEffectDescription,
            cardCount: getCard.cardCount,
            playerState: this.player.getPlayerState()
        };
    }

    selectAChoice() {
        this.player.applyEffect(this.card.choice[0].effect);
        this.starvation=this.player.dayEffect();
        const gameState = this.endGame();

        return {
            gameStatus: gameState.gameStatus,
            result:gameState.result,
            playerState: this.player.getPlayerState(),
            starvation:this.starvation
        };
    }

    selectBChoice() {
        this.player.applyEffect(this.card.choice[1].effect);
        this.starvation=this.player.dayEffect();
        const gameState = this.endGame();
        
        return {
            gameStatus: gameState.gameStatus,
            result:gameState.result,
            playerState: this.player.getPlayerState(),
            starvation:this.starvation
        };
    }

    getPlayerState() {
        return this.player.getPlayerState();
    }

    endGame() {
        const gameOver = this.player.isGameOver();

        if (gameOver.isOver) {
            return {
                gameStatus: false,
                result: gameOver.result
            };
        }
        else {
            return {
                gameStatus: true
            };
        }
    }

    initGame() {
        this.player.initGame();
        this.deck.initCards(); 
        return {
            playerState: this.player.getPlayerState()
        };
    }

}
