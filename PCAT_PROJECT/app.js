const express = require('express');
const ejs = require('ejs'); // Template Engine
const path = require('path'); //Kodumuzda bir dosyanın path'ini bulmak için bir core module.

const app = express();

//TEMPLATE ENGINE

app.set('view engine', 'ejs'); // app.set komutuyla template engine olarak ejs kullanacagimizi belirtmek icindir.
//ejs "views" klasorunun icine bakar.

// MIDDLEWARES
/*
const myLogger = (req, res, next) => {
  console.log('Middleware Log 1');
  next(); //Bu olmadan sıradakine geçmeyeceği için middleware'de kalır response dönmez.
};

const myLogger2 = (req, res, next) => {
  console.log('Middleware Log 2');
  next(); //Bu olmadan sıradakine geçmeyeceği için middleware'de kalır response dönmez.
};

// MIDDLEWARES
/*
    Request-Response'un arasındaki her şey Middleware olarak adlandırılır.
    Get'de bir middleware'dir.
*/

app.use(express.static('public')); //Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
/*
app.use(myLogger);
app.use(myLogger2);
*/

//ROUTES
app.get('/', (req, res) => {
  /*
    const photo = {
    id: 1,
    name: 'Photo name',
    description: 'Photo desc',
  };
  res.send(photo);
  */

  //res.sendFile(path.resolve(__dirname, 'temp/index.html')); //path.resolve ile dosyanın yolunu __dirname (proje klasorunun ismi)'de arar. (burası da bir Middleware)
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add', (req, res) => {
  res.render('add');
});

app.post('/photos', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

const port = 6300;

app.listen(port, () => {
  console.log(`Sunucu ${port}'da baslatildi!`);
});
