import {Actions, ActionsType, IState} from "../../types/boardReducer.ts";
import {initBoard} from "../../utils/boardUtils.ts";

const defaultState: IState = {
    board: initBoard(),
    gameEnd: false,
    selectedCell: {i: -1, j: -1, value: '.'}
}


export const boardReducer = (state = defaultState, action: Actions) => {
    switch (action.type) {
        case ActionsType.SET_BOARD: {
            return {
                ...state,
                board: action.payload,
            }
        }
        case ActionsType.SET_GAME_END: {
            return {
                ...state,
                gameEnd: true,
            }
        }
        case ActionsType.SET_SELECTED_CELL: {
            return {
                ...state,
                selectedCell: action.payload,
            }
        }
        default: {
            return state;
        }
    }
}

export type boardState = ReturnType<typeof boardReducer>;