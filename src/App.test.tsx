import { render, screen } from "@testing-library/react";
import App from "./App";

describe('App', () => {
    it('renders', () => {
        const { container } = render(<App />);
        const barWrapper = container.querySelector('.bar-wrapper');
        expect(barWrapper).toBeTruthy();
    });
    it('renders Toolbar correctly', async () => {
        const { container } = render(<App />);
        const Toolbar = container.querySelector('.MuiToolbar-root');
        const battleShipText = await screen.findByText('Battleship');
        expect(Toolbar).toBeTruthy();
        expect(battleShipText).toBeTruthy();
    });

    it('renders Button correctly', async () => {
        const { container } = render(<App />);
        const Game = container.querySelector('.game-div');
        const startText = await screen.findByText('Start');
        expect(startText).toBeTruthy();
        expect(Game).not.toBeTruthy();
    })
})