import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import Connect4 from './Connect4';
import api from './api/api'

class App extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return (
            <Router>
                <Switch> 
                    <Route exact path='/'>               
                        <Home/>
                    </Route>
                    <Route exact path='/Connect4'>
                        <Connect4/>
                    </Route>
                </Switch>
            </Router>
        )    
    }
}

export default App;
