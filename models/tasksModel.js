const connection = require('./connection');

const getAllTasks = async () =>
    connection()
    .then((db) => db.collection('tasks').find().toArray())
    .then((res) => res);

const addNewTask = async (task, status) =>
    connection()
    .then((db) => db.collection('tasks').insertOne({
        task,
        status,
        createdAt: Date.now(),
    }))
    .then((res) => ({
        id: res.insertedId,
        task,
        status,
    }));
    
module.exports = {
    getAllTasks,
    addNewTask,
};
