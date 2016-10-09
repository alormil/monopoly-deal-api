import {CardEntity} from '../CardEntity';

export class NoCardEntity extends CardEntity {

    constructor() {
        super('JUST SAY NO', 4, 'noAction', 'images/actions/no/just_say_no.jpg' , true);
    }

    playCardInCenter(): void {
        console.log(`Card: ${this.name} was played !`);
    }
}
