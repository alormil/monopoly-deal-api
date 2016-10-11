import {PlayerEntity} from '../../../app/entities/player/PlayerEntity';
import {expect} from 'chai';

describe ('Player Entity', () => {
    describe ('Constructor', () => {

        const PLAYER_ID: number = 123;
        const testPlayer: PlayerEntity = new PlayerEntity(PLAYER_ID);

        it('PlayerId should be assigned properly', (done: Function) => {
            expect(testPlayer.id).to.equal(PLAYER_ID);
            done();
        });
        it('Cards in hand should be 0', (done: Function) => {
            expect(testPlayer.cardsInHand.length).to.equal(0);
            done();
        });
        it('Cards in bank should be 0', (done: Function) => {
            expect(testPlayer.cardsInBank.length).to.equal(0);
            done();
        });
        it('Properties displayed should be 0', (done: Function) => {
            expect(testPlayer.propertiesDisplayed.length).to.equal(0);
            done();
        });
        it('Number of full sets should be 0', (done: Function) => {
            expect(testPlayer.numberOfFullSets).to.equal(0);
            done();
        });
    });
});
