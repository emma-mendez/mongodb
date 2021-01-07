const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:12345/task-manager', {
    useNewUrlParser: true,
    useCreateIndex: true
})
const Task = mongoose.model('Task',{
    name: {
        type: String,
        require: true
    },
    completed: {
        type: String,
        require: true
    },
    points: {
        type: Number
    }
})

const routineTask = new Task({
    name: 'Emma',
    completed: true,
    points: 1
})

routineTask.save();