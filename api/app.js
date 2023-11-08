const express = require('express');

const app = express();
const {sequelize} = require('./db/db.js');

require("dotenv").config();

const NODE_DOCKER_PORT = process.env.NODE_DOCKER_PORT || 8080;
const NODE_LOCAL_PORT = process.env.NODE_LOCAL_PORT || 4000;

app.get('/', (req, res) => {
    try {
        
        console.log(`Соединение с БД было успешно установлено: ${sequelize.authenticate()}`)
    } catch (e) {
        console.log('Невозможно выполнить подключение к БД: ', e)
    }
  res.send('Home Route');
});



app.listen(NODE_LOCAL_PORT, () => {
  console.log(`Server is running on port local: ${NODE_LOCAL_PORT}.
    docker: ${NODE_DOCKER_PORT}.`);
});