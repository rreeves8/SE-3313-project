const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));



app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname+'/public/home/build/index.html'));
});




app.listen(port, () => console.log(`Listening on port ${port}`));