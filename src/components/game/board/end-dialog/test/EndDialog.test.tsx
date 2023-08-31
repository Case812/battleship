import {render, screen} from "@testing-library/react";
import EndDialog from "../EndDialog";

describe('EndDialog', () => {
    it('renders correctly ', () => {
        render(<EndDialog open={true} onClose={() => {}}/>);
        const title = screen.queryByText('You won');
        const button = screen.queryByText('Start New Game');
        expect(title).toBeTruthy();
        expect(button).toBeTruthy();
    })
})