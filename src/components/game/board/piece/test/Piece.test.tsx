import {render} from "@testing-library/react";
import Piece from "../Piece";

describe('Piece', () => {
    it('starts', () => {
        const {container} = render(<Piece hasShipPart={false} clicked={true}/>);
        const piece = container.querySelector('.piece');
        expect(piece)
        .toBeTruthy();
    })
})