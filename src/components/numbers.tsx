import {FC} from "react";
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {Actions, ActionsType} from "../types/boardReducer.ts";
import {useTypedSelector} from "../hooks/useTypedSelector.ts";
import {isValidSudoku} from "../utils/boardUtils.ts";
import deleteIcon from '../assets/delete.png';

const Numbers:FC = () => {
    const dispatch:Dispatch<Actions> = useDispatch()
    const board = useTypedSelector(x => x.board);
    const selectedCell = useTypedSelector(x => x.selectedCell);

    const numbers = [1,2,3,4,5,6,7,8,9];


    function deleteClickHandler() {
        const updatedBoard = [...board];
        if (!updatedBoard[selectedCell.i][selectedCell.j].immutable) {
            updatedBoard[selectedCell.i][selectedCell.j].value = '.';
            dispatch({type: ActionsType.SET_BOARD, payload: updatedBoard});
        }
    }

    function onClickHandler(x: number) {
        const updatedBoard = [...board];
        if (!updatedBoard[selectedCell.i][selectedCell.j].immutable) {
            updatedBoard[selectedCell.i][selectedCell.j].value = x.toString();
            updatedBoard[selectedCell.i][selectedCell.j].error = !isValidSudoku(updatedBoard);
            console.log(updatedBoard[selectedCell.i][selectedCell.j].error);
            dispatch({type: ActionsType.SET_BOARD, payload: updatedBoard});
        }
    }


    return (
        <div className="numbers">
            <div className="number" onClick={deleteClickHandler}>
                <img src={deleteIcon}/>
            </div>
            {numbers.map((x, index) => (
                <div key={index} className="number" onClick={() => onClickHandler(x)}>
                    {x}
                </div>
            ))}
        </div>
    );
};

export default Numbers;