const express = require('express');

const router = express.Router();

const tasksService = require('../services/tasksService');
const validate = require('../validations/validateTasks');

router.get('/tasks', async (req, res) => {
    const tasks = await tasksService.getTasks();
    console.log('controller', tasks);

    return res.status(200).json(tasks);
});

router.post('/tasks',
validate.validateInputs,
async (req, res) => {
    const { task, status } = req.body;

    const newTask = await tasksService.addTask(task, status);

    return res.status(201).json(newTask);
});

router.put('/tasks/:id',
validate.validateInputId,
validate.validateInputs,
async (req, res) => {
    const { id } = req.params;
    const { task, status } = req.body;

    const updatedTask = await tasksService.taskUpdate(id, task, status);

    return res.status(200).json(updatedTask);
});

router.delete('/tasks/:id',
validate.validateInputId,
async (req, res) => {
    const { id } = req.params;

    const deletedTask = await tasksService.taskDelete(id);

    return res.status(200).json(deletedTask);
});

module.exports = router;
