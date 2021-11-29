import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import Connect4 from './Connect4';
import api from './api/api'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            playerId: ''
        }
    }
    
    setPlayerId = (id) => {
        console.log("set id to " + id)
        this.setState({
            playerId: id
        })
    }
    
    render(){
        return (
            <Router>
                <Switch> 
                    <Route exact path='/'>
                        <Home setPlayerId = {this.setPlayerId}/>
                    </Route>
                    <Route exact path='/Connect4'>
                        <Connect4 playerId = {this.state.playerId}/>
                    </Route>
                </Switch>
            </Router>
        )    
    }
    
}

export default App;
