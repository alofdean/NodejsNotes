const express = require('express');
const ejs = require('ejs');

const app = express();

// EJS Added
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add_post', (req, res) => {
  res.render('add_post');
});

app.get('/post', (req, res) => {
  res.render('post');
});

const port = 7096;

app.listen(port, () => {
  console.log(`Sunucu ${port}'da baslatildi!`);
});
