export abstract class CardEntity {

    readonly name: string;
    readonly value: number;
    readonly cardType: string;
    readonly cardImage: string;
    readonly backCardImage: string = '/images/back/backcard.jpg';
    readonly isPlayableInCenter: boolean;

    constructor(cardName: string, cardValue: number, cardCategoryType: string, cardImagePath: string, cardIsPlayableInCenter: boolean) {
        this.name = cardName;
        this.value = cardValue;
        this.cardType = cardCategoryType;
        this.cardImage = cardImagePath;
        this.isPlayableInCenter = cardIsPlayableInCenter;
    }

    abstract playCardInCenter(): void;
}
