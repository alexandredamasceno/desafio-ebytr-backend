const { ObjectId } = require('mongodb');

const messageIdInvalid = {
    message: '"Id" inválido',
};

const messageTaskInvalid = {
    message: '"tarefa" não informada ou inválida',
};

const messageStatusInvalid = {
    message: '"status" inválido',
};

const validateInputId = (req, res, next) => {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
        console.log(ObjectId.isValid(id));
        return res.status(400).json(messageIdInvalid);
    }

    next();
};

const validateInputs = (req, res, next) => {
    const { task, status } = req.body;

    if (!task || typeof task !== 'string') {
        return res.status(400).json(messageTaskInvalid);
    }

    if (typeof status !== 'string') {
        return res.status(400).json(messageStatusInvalid);
    }

    next();
};

module.exports = {
    validateInputs,
    validateInputId,
};
