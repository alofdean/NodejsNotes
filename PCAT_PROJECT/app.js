const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const photo = {
    id: 1,
    name: 'Photo name',
    description: 'Photo desc',
  };
  res.send(photo);
});

const port = 7234;

app.listen(port, () => {
  console.log(`Sunucu ${port}'da baslatildi!`);
});
