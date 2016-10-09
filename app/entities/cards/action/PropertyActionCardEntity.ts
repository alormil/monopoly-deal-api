import {CardEntity} from '../CardEntity';

export class PropertyActionCardEntity extends CardEntity {

    constructor(cardName: string, cardValue: number, cardImagePath: string, actionAmount: number) {
        super(cardName, cardValue, 'propertyAction', cardImagePath, true);
    }

    playCardInCenter(): void {
        console.log(`Card: ${this.name} was played !`);
    }
}
