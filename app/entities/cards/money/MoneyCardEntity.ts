import {CardEntity} from '../CardEntity';

export class MoneyCardEntity extends CardEntity {

    constructor(cardName: string, cardValue: number, cardImagePath: string) {
        super(cardName, cardValue, 'money', cardImagePath, false);
    }

    playCardInCenter(): void {
        console.log(`Cannot play card : ${this.name} in center !`);
    }
}
