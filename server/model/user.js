const mongoose = require("mongoose");

const schema = mongoose.Schema;

const UserSchema = new schema({
    name: {
        type: String,
        required: true
    },

    score: {
        type: Number,
        required: true
    }
}, {timestamps: true});

const User = mongoose.model("usersdb",UserSchema);

module.exports = User;