const newConnection = require('./DBConnection')

let conn = newConnection();
conn.connect();
conn.query("CREATE TABLE games;",(err,rows,feilds) => {
    if(err){
        console.log("error: " + err)
    }
    else{
        console.log(rows)
    }
})
conn.end();