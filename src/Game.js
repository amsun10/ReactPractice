/**
 * Created by amsun on 2019/8/26.
 */

import React from "react"
import btn from "./css/game.css"

class Square extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }
    render() {
        return (
            <button className="btn" onClick={() => {
                this.setState( { value: this.state });
            }}>
                {this.state.value}
            </button>
        )
    }
}
class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        }
    }

    handleClick(i)
    {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares});
    }

    renderSquare(i){
        return(<Square value={this.state.squares[i]} />)
    }
    render() {
        return(
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

class Game extends React.Component{
    render() {
       return(<Board/>);
    }
}
export default Game;
