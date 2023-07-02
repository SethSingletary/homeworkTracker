const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    Username: {type: String, required: true},
    Password: {type: String, required: true},
    Classes: {
        Subject: {type: String, required: true},
        Assignments: {
            Details: [{type: String, required: true}],
            Due: Date
        }
    }
});

let User = mongoose.model('users', userSchema);

module.export.User = User;