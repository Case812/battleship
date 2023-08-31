import {render} from "@testing-library/react";
import Game from "../Game";

describe('Game', () => {
    it('starts', () => {
        const {container} = render(<Game/>);
        const gameDiv = container.querySelector('.game-div');
        expect(gameDiv).toBeTruthy();
    })
})