const tasksModel = require('../models/tasksModel');

const getTasks = async () => {
    const tasks = await tasksModel.getAllTasks();
    console.log(tasks);

    return tasks;
};

module.exports = {
    getTasks,
};
