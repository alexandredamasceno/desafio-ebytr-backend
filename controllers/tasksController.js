const express = require('express');

const router = express.Router();

const tasksService = require('../services/tasksService');

router.get('/tasks', async (req, res) => {
    const tasks = await tasksService.getTasks();
    console.log('controller', tasks);

    return res.status(200).json(tasks);
});

router.post('/tasks',
async (req, res) => {
    const { task, status } = req.body;

    const newTask = await tasksService.addTask(task, status);

    return res.status(201).json(newTask);
});

module.exports = router;
