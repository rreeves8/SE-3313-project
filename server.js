const io = require('socket.io')(3000)

let socketStack = []

let activeGames = []

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
}

function checkWinner(cells){
    let cells;
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


io.onconnection("connection", (socket) =>{

})






//steal code from below

/*
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/frontend/build')));


app.get('/api/getvalues', (request,response) => {
    let conn = newConnection();
    //get values in table, 
})
app.post('/api/setAvailable', jsonParser, (request,response) => {
app.listen(port, () => console.log(`Listening on port ${port}`));

});
*/









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