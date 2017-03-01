var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes/index');



var app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


app.get('/pesan', routes.pesan);
app.post('/test', routes.test);
app.post('/login', routes.login);
app.post('/simpan', routes.simpan);




// buat flexboxgrid
app.use('/flexboxgrid', express.static(__dirname + '/node_modules/flexboxgrid/css/'));
// app.use('/font-awesome', express.static(__dirname + '/node_modules/font-awesome/'));
app.use('/roboto-fontface', express.static(__dirname + '/node_modules/roboto-fontface/'));


app.set('port', (process.env.PORT || 3001));

app.listen(app.get('port'),  () => {
  console.log(`Server berjalan di port : http://localhost:${app.get('port')}/`)
})  


module.exports = app;