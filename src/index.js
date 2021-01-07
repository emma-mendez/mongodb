const express = require('express');
const { db } = require('./models/task');
require("./db/mongoose");
const Task = require('./models/task');

const db = client.db(databaseName);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json);

app.post('/tasks', (req, res) => {
    const task = new Task(req.body);
    task.save().then(() => {
        res.status(201).send(task)
    }).catch(error => {
        res.status(400).send(e)
    })
})

app.get('tasks', (req, res) => {

    db.collection('tasks').find().then((error, result) => {
        res.status(200).json(result)
    }).catch( error => {
        res.status(400).send(error);
    })




app.listen(port, () => {
    console.log('Server is up on port' + port);
})