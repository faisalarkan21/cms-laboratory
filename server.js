

const express = require('express');

const app = express();


app.get('/', function(req, res ){

    res.send("testing");

});


app.set('port', (process.env.PORT || 3001));
app.listen(app.get('port'), ()=>{

    console.log(`Port servernya di : http://localhost:${app.get('port')}/`);

});
