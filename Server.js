const express = require('express');
const app = express();


app.route('/api/register').get((req, res) => {
  res.send({
    cats: [{ name: 'lilly' }, { name: 'lucy' }]
  });
});

app.route('/api/cats/:name').get((req, res) => {
  const requestedCatName = req.params['name'];
  res.send({ name: requestedCatName });
});

app.listen(8000, () => {
  console.log('Server started!');
});