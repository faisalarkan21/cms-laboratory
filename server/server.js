

var express = require('express');
var app = express()
var routes = require('./routes/index');


app.get('/pesan', routes.pesan);

app.set('port', (process.env.PORT || 3001));

// buat flexboxgrid
app.use('/flexboxgrid', express.static(__dirname + '/node_modules/flexboxgrid/css/'));
app.use('/font-awesome', express.static(__dirname + '/node_modules/font-awesome/'));
app.use('/roboto-fontface', express.static(__dirname + '/node_modules/roboto-fontface/'))

app.listen(app.get('port'),  () => {
  console.log(`Server berjalan di port : http://localhost:${app.get('port')}/`)
})  

