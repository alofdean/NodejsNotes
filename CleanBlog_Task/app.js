const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const blog = {
    id: 1,
    title: 'Blog Title',
    description: 'Blog DesC',
  };
  res.send(blog);
});

const port = 7096;

app.listen(port, () => {
  console.log(`Sunucu ${port}'da baslatildi!`);
});
