import {CardEntity} from '../CardEntity';

export class MoneyActionCardEntity extends CardEntity {

    readonly amount: number;

    constructor(cardName: string, cardValue: number, cardImagePath: string, actionAmount: number) {
        super(cardName, cardValue, 'moneyAction', cardImagePath, true);
        this.amount = actionAmount;
    }

    playCardInCenter(): void {
        console.log(`Card: ${this.name} was played !`);
    }
}
