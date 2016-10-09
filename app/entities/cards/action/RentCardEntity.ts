import {CardEntity} from '../CardEntity';

export class RentCardEntity extends CardEntity {

    constructor(cardName: string, cardValue: number, cardImagePath: string, actionAmount: number, cardIsPlayableInCenter: boolean) {
        super(cardName, cardValue, 'rentAction', cardImagePath, cardIsPlayableInCenter);
    }

    playCardInCenter(): void {
        if (this.isPlayableInCenter) {
            console.log(`Card: ${this.name} was played !`);
        } else {
            console.log(`Cannot play card : ${this.name} in center !`);
        }
    }
}
