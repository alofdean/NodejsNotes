const express = require('express');
const path = require('path'); //Kodumuzda bir dosyanın path'ini bulmak için bir core module.

const app = express();

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

/*
app.use(myLogger);
app.use(myLogger2);
*/

app.get('/', (req, res) => {
  /*
    const photo = {
    id: 1,
    name: 'Photo name',
    description: 'Photo desc',
  };
  res.send(photo);
  */

  res.sendFile(path.resolve(__dirname, 'temp/index.html')); //path.resolve ile dosyanın yolunu __dirname (proje klasorunun ismi)'de arar. (burası da bir Middleware)
});

const port = 7234;

app.listen(port, () => {
  console.log(`Sunucu ${port}'da baslatildi!`);
});
