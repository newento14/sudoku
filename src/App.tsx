import './styles/board.css'
import Block from "./components/block.tsx";
import Numbers from "./components/numbers.tsx";

export interface IBlocks {
    i: number,
    j: number,
}

function App() {
    const blocks:IBlocks[] = [{i: 0, j: 0}, {i: 0, j: 3}, {i: 0, j: 6},
                              {i: 3, j: 0}, {i: 3, j: 3}, {i: 3, j: 6},
                              {i: 6, j: 0}, {i: 6, j: 3}, {i: 6, j: 6},]

    return (
        <>
            <div className="board">
                {blocks.map((x, index) => (
                    <Block key={index} i={x.i} j={x.j}/>
                ))}

            </div>
            <Numbers />
        </>
    )
}

export default App
