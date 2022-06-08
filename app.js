const express = require('express')
const app = express()

app.use (express.json())
app.use (express.urlencoded({
  extended: true

}))


//get
app.get('/', function (req, res) {
  res.send('Selamat Datang di API')
})

//query
//app.get('/data-mahasiswa-query', function (req, res) {
 // res.json({
  //  npm : req.query.npm,
   // nama : req.query.nama,
   // alamat : req.query.alamat

 // })
//})

//post
app.post('/test/:npm/:nama/:alamat', function (req, res) {
  res.json({
    npm      : req.params.npm,
    nama     : req.params.nama,
    alamat   : req.params.alamat,
    hobi     : req.query.hobi,
    hp       : req.query.hp,
    email    : req.query.email,
    agama    : req.query.agama,
    gender   : req.body.gender,
    tinggi_badan    : req.body.tinggi_badan,
    kewarganegaraan: req.body.kewarganegaraan

  })
})

// localhost:3000/test/20421093/Pebriyansyah Pratama/JL. Alimudin Umar?hobi=Badminton&hp=089607951341&email=pebriiyan@gmail.com&agama=Islam

app.listen(3000)