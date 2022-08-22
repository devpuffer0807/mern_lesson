const { model, Schema } = require('mongoose');

const UserSchema = new Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
}, {
    timestamps: ['createdAt', 'updatedAt'],
});

const User = model("User", UserSchema);

module.exports = User;