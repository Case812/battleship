import {act, render} from "@testing-library/react";
import Board from "../Board";

describe('Board', () => {
    it('starts', () => {
        const {container} = render(<Board/>);
        const boardDiv = container.querySelector('.board-div');
        expect(boardDiv).toBeTruthy();
    });

    it('on click image is added', () => {
        const {container} = render(<Board/>);
        const pieceWrapper = container.querySelector('.piece-wrapper') as HTMLElement;
        const imageBefore = pieceWrapper.querySelector('img');
        act(() => pieceWrapper.click());
        const imageAfter = pieceWrapper.querySelector('img');
        expect(imageBefore).not.toBeTruthy();
        expect(imageAfter).toBeTruthy();
        
    });
})