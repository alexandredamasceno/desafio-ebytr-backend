require('dotenv/config');
const express = require('express');
const bodyParser = require('body-parser');

const tasksController = require('./controllers/tasksController');

const app = express();

app.use(bodyParser.json());

app.use(tasksController);

const { PORT } = process.env;

app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
