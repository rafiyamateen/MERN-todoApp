const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    TodoSchema = new Schema({
        todo: String
    }),
    Todo = mongoose.model('todo', TodoSchema)

module.exports = Todo