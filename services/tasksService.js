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

const taskUpdate = async (id, task, status) => {
    const taskUpdated = await tasksModel.updateTask(id, task, status);
    console.log(taskUpdated);

    return { id, task, status };
};

const taskDelete = async (id) => {
    const taskDeleted = await tasksModel.deleteTask(id);

    return taskDeleted.value;
};

module.exports = {
    getTasks,
    addTask,
    taskUpdate,
    taskDelete,
};
