import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://127.0.0.1:4001";

function Cell(props){//react function for creating a circle element or cell, the color of the cell is passed through props
    return <div className = 'cell'>
               <div className = {props.color}>  
               </div>
           </div>
}

function Column(props){  //react function for creating a collum, each collum holds an array of cells. 
    let newCells = []; //creating the holder of cells
    for(let j = 0; j < 6; j++){ //filling the collum with cells or cirlcles, the props.cells contains the color of the corresponding cell in memory
        newCells[j] =<Cell
                        key = {j}
                        y = {j}
                        x = {props.x}
                        color = {props.cells[j]} //assign the color of the cell from the collumns list of colors
                      ></Cell>
        
    }
    
    return <div className="collumn" onClick = {() => props.handleClick()}> 
               {newCells}
           </div> // return the created collumn with the proper cell elements added, attatch the click handler to the collumn not the cells
}


class Grid extends Component {
    constructor(){
        super();
        var newCells =  Array.from(Array(7), () => {
            return new Array(6).fill('none')
        })//create and empty double array with each color being none, or just blank
        
        this.state = { 
            cells: newCells,
            playerTurn: 'red',
            winner: ''
        } //set the initial state to the first player being red, no winner, and assign the empty cells array to the state
    }

    handleClick(columnNum) {        
        if(this.state.winner === ''){  //if no winner lets check add another circle and check if theres a winner
            for(let y = 6; y > -1; y--){ //cycle through the state double array, where the clicked collumn indicated which array to select
                if(this.state.cells[columnNum][y] === 'none'){ //cycle upward through the collumn until and empty spot is found
 
                    let prevState = this.state; //capture the current state and assign new values
                    let newCells = this.state.cells;
                    newCells[columnNum][y] = prevState.playerTurn; 

                    this.setState({
                        cells: newCells,    
                        playerTurn: (prevState.playerTurn === 'red') ? 'black' : 'red',
                        winner: this.checkWinner(newCells)
                    })
                    //set the new state and add the new color, when assigning the new winner state call the function check winner to see if theres a winer based on the new set of cells
                    break;
                }
            }
        }
    }
    
    render(){    
        let columns = [] //create an empty array to hold the collumn elements. assign the coloring of each cell or circle by passing the current state array in
        for(let i = 0; i < 7; i++){
            columns[i] =
                <Column
                    key = {i}
                    x = {i}
                    cells = {this.state.cells[i]}
                    handleClick = {() => this.handleClick(i)}
                ></Column>//send in click handler to the collumn and each array of cell colors to the corresponding collumn
        }
                
        return(
            <div>
                <div className = 'grid'>
                    {columns}
                </div>
                <div className = 'winner-text'> {this.state.winner} </div>
            </div>
        ); //create the header and the grid, the div element grid hols the collumns 
  }
}



class Connect4 extends React.Component {
    render(){
        return(
            <div>
                <a>Connect4</a>
                <Link to = '/'> return home</Link>
                <Grid/>
            </div>
        )
    }
}

export default Connect4;



