import { BoardState, Position, ShipItemParams } from "../interfaces/interfaces";

export const shipItems: ShipItemParams[] = [
  {
    imageSrc: "/Aircraft%20Shape.png",
    text: "Aircraft",
    numberOfHits: 5,
  },
  {
    imageSrc: "/Battleship%20Shape.png",
    text: "Battleship",
    numberOfHits: 4,
  },
  { imageSrc: "/Cruiser%20Shape.png", 
    text: "Cruiser", 
    numberOfHits: 3 
  },
  { imageSrc: "/Submarine%20Shape.png",
    text: "Submarine",
    numberOfHits: 3,
  },
  { imageSrc: "/Carrier%20Shape.png", 
    text: "Carrier", 
    numberOfHits: 2 
  }
];

export const defaultBoardState: BoardState = {
  shipTypes: {
    carrier: { size: 5, count: 1 },
    battleship: { size: 4, count: 1 },
    cruiser: { size: 3, count: 1 },
    submarine: { size: 3, count: 1 },
    destroyer: { size: 2, count: 1 },
  },
  layout: [
    {
      ship: "carrier",
      positions: [
        [2, 9],
        [3, 9],
        [4, 9],
        [5, 9],
        [6, 9],
      ],
    },
    {
      ship: "battleship",
      positions: [
        [5, 2],
        [5, 3],
        [5, 4],
        [5, 5],
      ],
    },
    {
      ship: "cruiser",
      positions: [
        [8, 1],
        [8, 2],
        [8, 3],
      ],
    },
    {
      ship: "submarine",
      positions: [
        [3, 0],
        [3, 1],
        [3, 2],
      ],
    },
    {
      ship: "destroyer",
      positions: [
        [0, 0],
        [1, 0],
      ],
    },
  ],
};

const createPositions = (): Position[] => {
  const innerPositions: Position[] = [];
  for (let i = 0; i < 100; i++) {
    const iString = String(i);
    const x = i < 10 ? i :  Number(iString.charAt(1));
    const y = i < 10 ? 0 : Number(iString.charAt(0));
    const hasShipPart = defaultBoardState.layout.some((item) => {
      return item.positions.some(
        (position) => position[0] === x && position[1] === y
      );
    });
    innerPositions.push({ x, y, clicked: false, hasShipPart });
  }
  return innerPositions;
};
export const defaultPositions: Position[] = createPositions();
