import {CardEntity} from '../CardEntity';

export class GoCardEntity extends CardEntity {

    constructor() {
        super('PASS GO', 1, 'goAction', 'images/actions/go/pass_go.jpg' , true);
    }

    playCardInCenter(): void {
        console.log(`Card: ${this.name} was played !`);
    }
}
