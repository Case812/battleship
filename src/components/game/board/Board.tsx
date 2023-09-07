import { useState } from "react";
import { defaultPositions } from "../../../constants/constants";
import Piece from "./piece/Piece";
import { Position } from "../../../interfaces/interfaces";
import "./Board.css";
import { checkIfComplete } from "../../../utils/BattleshipUtil";
import EndDialog from "./end-dialog/EndDialog";


export default function Board() {
    const [positions, setPositions] =
        useState(JSON.parse(JSON.stringify(defaultPositions)) as Position[]);
    const [dialogOpen, setDialogOpen] = useState(false);
    const handleClick = (position: Position) => {
        position.clicked = true;
        if (checkIfComplete(positions)) {
            setDialogOpen(true);
        }
        setPositions(new Array(...positions));
    };
    const onClose = (() => {
        setDialogOpen(false);
        setPositions(JSON.parse(JSON.stringify(defaultPositions)) as Position[]);
    }).bind(this as unknown);

    return (<>
        <div className="board-div">
            {positions.map((position, index) => (
                <div
                    className="piece-wrapper"
                    key={index}
                    onClick={() => !position.clicked && handleClick(position)}>
                    <Piece
                        hasShipPart={position.hasShipPart}
                        clicked={position.clicked}></Piece>
                </div>
            ))}
        </div>
        <EndDialog open={dialogOpen} onClose={onClose}></EndDialog>

    </>);
}