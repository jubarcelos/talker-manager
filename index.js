const express = require('express');
const bodyParser = require('body-parser');

const getTalkers = require('./middlewares/AllTalkers');
const getTalkerById = require('./middlewares/TalkerById');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/talker', getTalkers);
app.get('/talker/:id', getTalkerById);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
