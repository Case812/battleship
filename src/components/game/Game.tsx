import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Board from "./board/Board";
import "./Game.css";
import ShipItem from "./ship-item/ShipItem";
import { shipItems } from "../../constants/constants";
export default function Game() {
  return (
    <>
      <div className="game-div">
        <div className="ships-div">
          <Box sx={{ width: {lg: '20rem'} }} color="background.paper">
            <List>
              {shipItems.map((shipItem, index) => (
              <ShipItem key={index} shipItem={shipItem}/>))}
            </List>
          </Box>
        </div>
          <Board></Board>
      </div>
    </>)
}