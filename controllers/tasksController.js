const express = require('express');

const router = express.Router();

const tasksService = require('../services/tasksService');

router.get('/tasks', async (req, res) => {
    const tasks = await tasksService.getTasks();
    console.log('controller', tasks);

    return res.status(200).json(tasks);
});

module.exports = router;
