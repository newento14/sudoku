export interface ICell {
    i: number,
    j: number,
    value: string
}

export interface IBoardCell {
    value: string,
    error: boolean,
    immutable: boolean
}

export interface IState {
    board: IBoardCell[][],
    gameEnd: boolean
    selectedCell: ICell,
}

export enum ActionsType {
    SET_BOARD = "SET_BOARD",
    SET_GAME_END = "SET_GAME_END",
    SET_SELECTED_CELL = "SET_SELECTED_CELL"
}

interface fetchSetBoard {
    type: ActionsType.SET_BOARD,
    payload: IBoardCell[][],
}

interface fetchSetGameEnd {
    type: ActionsType.SET_GAME_END,
}

interface fetchSetSelectedCell {
    type: ActionsType.SET_SELECTED_CELL,
    payload: ICell;
}

export type Actions = fetchSetBoard | fetchSetGameEnd | fetchSetSelectedCell;
