import './App.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from './api/api';

function DropDown(props){
    let options = []
    
    for(let i = 0; i < props.userNames.length; i++){
        options[i] = <option value = {props.userNames[i]}> {props.userNames[i]} </option>
    }
    
    return(   
        <select value = {props.value} onChange = {props.onChange}>
            {options}
        </select>
    )
}

class Home extends React.Component {
    constructor(){
        super();

        let game = {
            fillCount: 1,
        }

        this.state = {
            queuedGames: [game,game,game,game],
            playerName: '',
            loggedIn: false,
            userNames: ["magnus","david"]
        }
        this.selectGame = this.selectGame.bind(this)
        this.inputUserName = this.inputUserName.bind(this)
    }

    async getQueuedGames () {
        try{
            const response = await api.get('/api/availablegames')
            this.setState({
                queuedGames: response.data,
            })
        }
        catch(err){
            console.log(err)
        }
    }

    async getUserNames () {
        try{
            const response = await api.get('/api/getusernames')
            this.setState({
                queuedGames: response.data,
            })
        }
        catch(err){
            console.log(err)
        }
    }

    logIn(){
        let usr;
        if(this.state.playerName ===''){

        }
        
        this.setState({
            loggedIn: true
        })
    }

    inputUserName(event){
        this.setState({
            playerName: event.target.value
        })
    }

    selectGame(event){
        this.setState({
            playerName: event.target.value
        })
    }

    render(){
        let queuedGamesHtml = []
        let login = <Link to ='/Connect4'>Start Game</Link>

        if(this.state.queuedGames === null){
            this.getUserNames();
            this.getQueuedGames();
        }
        if(!this.state.loggedIn){
            login =  <ul>
                        <label>Username : </label>   
                        <input value = {this.state.playerName} onChange={this.inputUserName} type="text" placeholder="Enter Username" name="username" />  
                        <DropDown value = {this.state.playerName} userNames = {this.state.userNames} onChange = {this.selectGame}/>
                        <Link to ='/Connect4' className = 'entry' onClick = {() => this.logIn()}>LogIn</Link>
                        
                    </ul>
        }
        else{
            for(let i = 0; i < this.state.queuedGames.length; i ++){
                queuedGamesHtml[i] = <a id = {i} onClick = {() => this.selectGame()}>{this.state.queuedGames[i].fillCount}</a>
            }
        }

        return(
            <div className="App">
                <header className = "title">Home</header>
                <div>
                    {queuedGamesHtml}
                </div>
                <div className = "submission-holder">
                    {login}
				</div>
                
                {/* switches from home page to connect4*/}
            </div>
        );
        
    }
}

export default Home;