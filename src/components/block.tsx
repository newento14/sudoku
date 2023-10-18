import {FC, JSX} from "react";
import Cell from "./cell.tsx";
import {IBlocks} from "../App.tsx";
import {useTypedSelector} from "../hooks/useTypedSelector.ts";


const Block: FC<IBlocks> = (block) => {
    const board = useTypedSelector(x => x.board);
    const selectedCell = useTypedSelector(x => x.selectedCell);


    const { i, j } = block;
    const blockElements = (): JSX.Element[] => {
        const elements: JSX.Element[] = [];
        for (let row = i; row < i + 3; ++row) {
            for (let col = j; col < j + 3; ++col) {
                if (selectedCell.i < 0) {
                    const el = board[row][col];

                    elements.push(<Cell key={`${row}-${col}`}
                                        i={row}
                                        j={col}
                                        cell={{value:el.value, error: el.error, immutable: el.immutable}}
                                        selected={0}/>);
                } else {
                    let selected = 0;
                    if (row === selectedCell.i && col === selectedCell.j) {
                        selected = 2;
                    } else if(board[row][col].value === selectedCell.value && selectedCell.value !== '.') {
                        selected = 2;
                    } else if (row === selectedCell.i) {
                        selected = 1;
                    } else if (col === selectedCell.j) {
                        selected = 1;
                    }
                    const el = board[row][col];
                    elements.push(<Cell key={`${row}-${col}`}
                                        i={row}
                                        j={col}
                                        cell={{value:el.value, error: el.error, immutable: el.immutable}}
                                        selected={selected}/>);
                }
            }
        }
        return elements;
    }

    return (
        <div className="block">
            {blockElements()}
        </div>
    );
};



export default Block;