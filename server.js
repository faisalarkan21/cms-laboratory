

var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Haii !')
})

app.set('port', (process.env.PORT || 3001));

app.listen(app.get('port'),  () => {
  console.log(`Server berjalan di port : http://localhost:${app.get('port')}/`)
})