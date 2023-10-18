import {FC} from "react";
import {Actions, ActionsType, IBoardCell} from "../types/boardReducer.ts";
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";

interface CellProps {
    cell: IBoardCell,
    selected: number,
    i: number,
    j: number
}

const Cell:FC<CellProps> = ({cell, selected, i, j}) => {
    const dispatch:Dispatch<Actions> = useDispatch();

    function handleOnClick() {
        dispatch({type: ActionsType.SET_SELECTED_CELL, payload: {i: i, j: j, value: cell.value}});

    }

    const classes:string[] = ['cell'];
    if (selected === 1) {
        classes.push('selected');
    } else if (selected === 2) {
        classes.push('super-selected');
    }

    if (cell.error) {
        classes.push('error');
    }

    return (
        <div className={classes.join(" ")} onClick={handleOnClick}>
            {cell.value !== '.' && cell.value}
        </div>
    );
};

export default Cell;