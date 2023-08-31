export interface ShipItemParams {
    imageSrc: string;
    text: string;
    numberOfHits: number;
}

export interface Position {
    x: number;
    y: number;
    clicked: boolean;
    hasShipPart: boolean;    
}

export interface BoardState {
    shipTypes: {[shipName in ShipName]: ShipType};
    layout: ShipLayout[];
}

export interface ShipType {
    size: number;
    count: number;
}

export interface ShipLayout {
    ship: ShipName;
    positions: number[][];
}

export type ShipName = 'carrier' | 'battleship' | 'cruiser' | 'submarine' | 'destroyer';