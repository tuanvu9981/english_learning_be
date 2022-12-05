const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema(
    {
        japanese: {
            type: String,
        },
        vietnamese: {
            type: String,
        },
        audioUrl: {
            type: String
        }
    },
    {
        timestamps: false,
        versionKey: false,
        _id: true
    }
);

module.exports = mongoose.model('Word', WordSchema);