import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render(){
        //display a box that contains all the queue games, get queue games from server with axios request

        //when a queued game is selected and a submit button is pressed, post the queue game to the server and start new game, switch the screen to the connect 4 app using link

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