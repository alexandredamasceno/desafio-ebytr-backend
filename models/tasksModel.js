const connection = require('./connection');

const getAllTasks = async () =>
    connection()
    .then((db) => db.collection('tasks').find().toArray())
    .then((res) => res);

module.exports = {
    getAllTasks,
};
