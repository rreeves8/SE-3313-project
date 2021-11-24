import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import Connect4 from './Connect4';

class App extends React.Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path='/'>
                        {/*default routes to home*/}
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
