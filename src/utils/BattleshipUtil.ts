import { defaultBoardState } from "../constants/constants";
import { Position } from "../interfaces/interfaces";

export function checkIfComplete(positions: Position[]) {
    for(const layout of defaultBoardState.layout) {
        for(const position of layout.positions) {
            const x = position[0];
            const y = position[1];
            const key = x < 1 ? y : Number(`${y}${x}`)
            if(!positions[key]?.clicked) return false;
        }
    }
    return true;
}