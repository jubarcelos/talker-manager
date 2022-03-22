const express = require('express');
const bodyParser = require('body-parser');

const getTalkers = require('./middlewares/AllTalkers');
const getTalkerById = require('./middlewares/TalkerById');
const validatePassword = require('./middlewares/ValidatePassword');
const validateEmail = require('./middlewares/ValidateEmail');
const login = require('./middlewares/Login');
const validateToken = require('./middlewares/ValidateToken');
const { validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate } = require('./middlewares/ValidateTalker');
const addNewTalker = require('./middlewares/AddTalker');
const updateTalker = require('./middlewares/UpdateTalker');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/talker', getTalkers);
app.get('/talker/:id', getTalkerById);
app.post('/login', validateEmail, validatePassword, login);
app.post('/talker', validateToken, validateName, validateAge,
  validateTalk, validateWatchedAt, validateRate, addNewTalker);
app.put('/talker/:id', validateToken, validateName, validateAge,
validateTalk, validateWatchedAt, validateRate, updateTalker);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
