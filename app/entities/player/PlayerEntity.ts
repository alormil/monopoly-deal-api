import {CardEntity} from '../cards/CardEntity';

export class PlayerEntity {

    readonly id: number;
    public cardsInHand: CardEntity[];
    public cardsInBank: CardEntity[];
    public propertiesDisplayed: CardEntity[];
    public numberOfFullSets: number = 0;

    constructor (playerId: number) {
        this.id = playerId;
    }
}
