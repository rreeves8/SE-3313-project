const express = require('express')
const path = require('path')
const http = require('http') 
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

let socketStack = []
let activeGames = []
let queueGames = []
const port = 3000 || process.env.port

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
    for(let y = 6; y > -1; y--){ //cycle through the state double array, where the clicked collumn indicated which array to select
        if(this.state.cells[columnNum][y] === 'none'){ //cycle upward through the collumn until and empty spot is found

            let prevState = this.state; //capture the current state and assign new values
            let newCells = this.state.cells;
            newCells[columnNum][y] = prevState.playerTurn; 
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
    socket.on('disconnect')



})

app.get('/api/availablegames', (request,response) => {
    let currGames = [];
    for(let i = 0; i < queueGames.length; i++){
        let curr = queueGames[i]
    }
})

app.post('/api/newgame', (request,response) => {
    //get index of queueGames requested
    //move the queuegame to active game
    //respond with active game data
})

app.listen(port, () => console.log('Running on ' + port))



/*

app.get('/api/availability', (request,response) => {
    let conn = newConnection();
    conn.connect();
    conn.query("SELECT * FROM availability;",(err,rows,feilds) => {
        if(err){
            response.send("error: " + err)
            console.log(err)
        }
        else{
            response.json(rows)
        }
    })
    conn.end();
})

app.post('/api/setAvailable', jsonParser, (request,response) => {
    let conn = newConnection();
    conn.connect();
    let data = request.body;
    console.log(data)
    let string = "INSERT INTO availability VALUES (";
    
    for(let i = 0; i < 10; i ++){
        string += data[i];
        if(i != 9){
            string +=",";
        } 
    }

    conn.query("DELETE FROM availability", (error,rows,fields) => {
        console.log(error);
    })

    conn.query(string + ");", (error,rows,fields) => {
        console.log(error);
    })
    conn.end();
})



*/