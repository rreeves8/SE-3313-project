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

        this.state = {
            playerName: '',
            loggedIn: false,
            userNames: null
        }

        this.selectName = this.selectName.bind(this)
        this.inputUserName = this.inputUserName.bind(this)
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

    async setUserName () {
        const response = await api.post('/api/newTimeSlot', {
            ...this.state.playerName
        })
        .then((response) =>{      
            if(response.data !== 'error name already exists'){
                alert()
            }
        }, 
        (error) => {
            console.log(response)
        })
        
    }

    logIn(){
        let loggedIn = false;
        if(this.state.playerName === ''){

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

    selectName(event){
        this.setState({
            playerName: event.target.value
        })
    }

    render(){
        let queuedGamesHtml = []
        let login = <Link to ='/Connect4'>Start Game</Link>

        if(this.state.userNames === null){
            this.getUserNames();
        }

        if(!this.state.loggedIn){
            login =  <ul>
                        <label>Username : </label>   
                        <input value = {this.state.playerName} onChange={this.inputUserName} type="text" placeholder="Enter Username" name="username" />  
                        <DropDown value = {this.state.playerName} userNames = {this.state.userNames} onChange = {this.selectName}/>
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