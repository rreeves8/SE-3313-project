import './App.css';
import React, { useState } from 'react';
import { Link  } from 'react-router-dom';
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
    constructor(props){
        super(props);

        this.state = {
            playerName: '',
            loggedIn: false,
            userNames: null,
            droppedDown: false,
            setPlayerId: props.setPlayerId
        }

        this.selectName = this.selectName.bind(this)
        this.setUserName = this.setUserName.bind(this)
        this.inputUserName = this.inputUserName.bind(this)
    }

    async getUserNames () {
        console.log("getting usernames")
        try{
            const response = await api.get('/api/userNames')
            this.setState({
                userNames: response.data,
            })
            console.log(response.data)
        }
        catch(err){
            console.log(err)
        }
    }

    async setUserName () {
        console.log("setting user name")
        console.log(this.state.playerName)
        
        let type = 'saved';

        if(!this.state.droppedDown){
            type = 'new'
        }

        let data = {
            name: this.state.playerName,
            type: type
        }
        
        const response = await api.post('/api/newUserName', {
            ...data
        })
        .then((response) =>{      
            if(response.data !== 'good'){
                alert(response.data)
                return false
            }
            else{
                this.state.setPlayerId(this.state.playerName)
                return true
            }
        }, 
        (error) => {
            console.log(response)
        })
        
    }

    logIn(){
        let loggedIn = false;

        if(this.state.playerName === ''){
            alert("please enter a name")
        }
        else{
            loggedIn = this.setUserName()
            console.log("logged in")
            
        }
        
        this.setState({
            loggedIn: loggedIn
        })
    }

    inputUserName(event){ 
        this.setState({
            playerName: event.target.value,
            droppedDown: false
        })
    }

    selectName(event){
        this.setState({
            playerName: event.target.value,
            droppedDown: true
        })
    }

    render(){
        let login;
        
        if(this.state.userNames === null){
            this.getUserNames();
        }

        else if (this.state.userNames !== null){
            if(!this.state.loggedIn){
                login =  <ul>
                            <label>Username : </label>   
                            <input value = {this.state.playerName} onChange={this.inputUserName} type="text" placeholder="Enter Username" name="username" />  
                            <DropDown value = {this.state.playerName} userNames = {this.state.userNames} onChange = {this.selectName}/>
                            <button className = 'entry' onClick = {() => this.logIn()}>LogIn</button>          
                        </ul>
            }
            else{
                login = <Link to ='/Connect4'>Start Game</Link>
            }
        }


        return(
            <div className="App">
                <header className = "title">Home</header>
                
                <div className = "submission-holder">
                    {login}
				</div>
                
                {/* switches from home page to connect4*/}
            </div>
        );
        
    }
}

export default Home;