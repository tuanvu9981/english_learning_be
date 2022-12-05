const mongoose = require('mongoose');
const { USER_ROLE } = require('../constant/user.constant');

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
        },
        password: {
            type: String,
        },
        role: {
            type: String,
            enum: Object.values(USER_ROLE)
        },
        wordIds: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Word'
            }
        ],
        imageUrl: {
            type: String
        },
    },
    {
        timestamps: false,
        versionKey: false,
        _id: true
    }
);

module.exports = mongoose.model('User', UserSchema);