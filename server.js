

var express = require('express');
var app = express()

app.get('/pesan', function (req, res) {
  res.json({pesan: 'selamat datang XD '});
})

app.set('port', (process.env.PORT || 3001));

app.listen(app.get('port'),  () => {
  console.log(`Server berjalan di port : http://localhost:${app.get('port')}/`)
})  