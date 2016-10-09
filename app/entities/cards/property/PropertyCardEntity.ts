import {CardEntity} from '../CardEntity';

export class PropertyCardEntity extends CardEntity {

    readonly color: string;
    readonly propertyType: string;

    constructor(cardName: string, cardValue: number, cardImagePath: string, propertyColor: string, propertyCardType: string) {
        super(cardName, cardValue, 'property', cardImagePath, false);
        this.color = propertyColor;
        this.propertyType = propertyCardType;
    }

    playCardInCenter(): void {
        console.log(`Cannot play card : ${this.name} in center !`);
    }
}
