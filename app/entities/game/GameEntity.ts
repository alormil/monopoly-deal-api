import {CardEntity} from '../cards/CardEntity';
import {PlayerEntity} from '../player/PlayerEntity';

export class GameEntity {

    readonly id: number;
    public players: PlayerEntity[];
    public cardsInMiddle: CardEntity[];
    public cardsPlayed: CardEntity[] = [];
    public activePlayer: PlayerEntity;
    readonly gameplayOrder: PlayerEntity[];
    public activePlayerRemainingMoves: number = 3;
    public isGameOver: boolean = false;

    constructor (gameId: number, playersInGame: PlayerEntity[] ) {
        this.id = gameId;
        this.players = playersInGame;
        this.gameplayOrder = playersInGame;
        this.activePlayer = playersInGame[0];
    }
}
