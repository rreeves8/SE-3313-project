import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

class Connect4 extends React.Component {
    render(){
        return(
            <div>
                <a>Connect4</a>
                <Link to = '/'> return home</Link>
            </div>
        )
    }
}

export default Connect4;