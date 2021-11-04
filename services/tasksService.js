const tasksModel = require('../models/tasksModel');

const getTasks = async () => {
    const tasks = await tasksModel.getAllTasks();
    console.log(tasks);

    return tasks;
};

const addTask = async (task, status) => {
    const newTask = await tasksModel.addNewTask(task, status);

    return newTask;
};

module.exports = {
    getTasks,
    addTask,
};
