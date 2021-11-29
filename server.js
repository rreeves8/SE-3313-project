const express = require('express')
const path = require('path')
const http = require('http') 
const socketio = require('socket.io')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

const app = express()
const server = http.createServer(app)
const io = socketio(server)
const port = 3000 || process.env.port

let usrNames = []
let activeUsrs = []

let activeGames = []
let queueGames = []

let queuedGame = {
    playerWaiting: ''
}

let game = {
    player1: '',
    player2: '',
    cells: [],
    winner: ''
}

function newGame(playerId1, playerId2, color1, color2){
    let cells =  Array.from(Array(7), () => {return new Array(6).fill('none')})

    let player1 = {
        playerId: playerId1,
        color: color1
    }

    let player2 = {
        playerId : playerId2,
        color: color2 
    }

    let game = {
        cells: cells,
        turn: 'red',
        winner: ''
    }

    activeGames.push({
        p1: player1,
        p2: player2,
        game: game
    })
}

function updateCells(playerId1, color, cooridnate){
    let cells;
    for(let i = 0; i < activeGames.length; i++){
        if(activeGames[i].p1.playerId === playerId1){
            activeGames[i].game.cells[cooridnate.x][cooridnate.y] = color;
            cells = activeGames[i].game.cells;
        }
    }
    let win = checkWinner(cells)

    if(win !== ''){
        return win;
    }
    //broken
    for(let y = 6; y > -1; y--){ //cycle through the state double array, where the clicked collumn indicated which array to select
        if(this.state.cells[columnNum][y] === 'none'){ //cycle upward through the collumn until and empty spot is found

            let prevState = this.state; //capture the current state and assign new values
            let newCells = this.state.cells;
            newCells[columnNum][y] = prevState.playerTurn; 
        }
    }
}

function checkWinner(cells){
    for(let i = 0; i < activeGames.length; i++){
        if(activeGames[i].p1.playerId === playerId1){
            cells = activeGames[i].game.cells;
        }
    }

    for(let x = 0; x < 7; x++){
        for(let y = 0; y < 6; y++){
            let win = checkCells(cells,x,y)
            if(win !== ''){
                return win;
            }
        }
    }
}

function checkCells(cells, x, y){ 
    let curr = cells[x][y];
    let nextColor = '';
    let count = 0; 

    //vertical check
    for(let i = 1; i < 4; i++){
        nextColor = cells[x][y + i] 
        if(nextColor === curr){
            count++; 
            if(count > 3){
                return curr;
            }
        }
        else{
            break;
        }
    }

    //horizontal check
    for(let i = 1; i < 4; i++){
        if(!(x + i > 6) && !(x-i<0)){ 
            nextColor = cells[x + i][y];  
            if(nextColor === data.curr){ 
                count++; 
                if(count > 3){
                    return curr;
                }
            }
            else{ 
                break;
            }
        }    
    }

    //+x +y check
    for(let i = 1; i < 4; i++){
        if(!(x + i > 6) && !(y + i > 6) && !(x - i < 0) && !(y -i < 0)){//bounds check
            nextColor = cells[x + i][y - i]
            
            if(nextColor === curr){
                count++;
                if(count > 3){
                    return curr;
                }
            }
            
            else{
                break;
            }
        }
    }

    for(let i = 1; i < 4; i++){
        if(!(x + i > 6) && !(y + i > 6) && !(x - i < 0) && !(y -i < 0)){
            nextColor = cells[x + i][data.y + i]
            if(nextColor === curr){
                count++;
                if(count > 3){
                    return curr;
                }
            }
            else{
                break;
            }
        }

    } 
    return ''
}


app.use(express.static(path.join(__dirname, '/frontend/build')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

io.on('connection',socket => {
    let playerNum;
    
    socket.on('login', (usrName) => {
        playerNum = numPlayers++;

        if(queueGames.length > 0){
            
        }
        else{
            queueGames[queueGames.length - 1] = {
                playerWaiting: playerNum
            }
        }




    })
    
    socket.on('disconnect')



})

app.get('/api/userNames', (request,response) => {
    console.log('getting user names')
    response.json(usrNames)
})

app.post('/api/newUserName', jsonParser, (request,response) => {
    console.log(request.body)
    let data = '';
    var bodyLength = Object.keys(request.body.name).length;

    for(let i = 0; i < bodyLength; i ++){
        console.log(request.body.name[i.toString()])
        data += request.body.name[i.toString()] 
        console.log(data)
    }

    

    if(request.body.type === 'new'){
        for(let i = 0; i < usrNames.length; i ++){
            if(data === usrNames[i]){
                return response.json("error name already exists")
            }
        }

        for(let i = 0; i < activeUsrs.length; i ++){
            if(data === activeUsrs.length){
                return response.json("error name is in play")
            }
        }
    }
    if(request.body.type !== 'saved'){
        usrNames.push(data); 
    }
    console.log(usrNames)

    return response.json("good")
})

app.listen(port, () => console.log('Running on ' + port))

