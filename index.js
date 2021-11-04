require('dotenv/config');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const { PORT } = process.env;

app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
