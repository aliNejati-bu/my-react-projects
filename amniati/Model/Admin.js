const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    refreshTokens: {
        type: [{
            token: {
                type: String,
                required: true
            }
        }],
        default: []
    }
});

module.exports = model("Admin", userSchema);
