import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render(){
        return(
            <div>
                <a>HOME</a>
                <Link to ='/Connect4'> Start game </Link>
                {/* switches from home page to connect4*/}
            </div>

        )
    }
}

export default Home;