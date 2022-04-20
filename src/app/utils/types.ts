export enum TileType {
    Empty,
    Double,
    Triple
}


export interface Board {
    grid: Tile[][]
}


export interface Vector {
    x: number,
    y: number
}

export interface Tile {
    tile: TileType,
    letter: string,
    position: Vector
}
