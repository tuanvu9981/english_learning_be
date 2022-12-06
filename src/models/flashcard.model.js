const mongoose = require('mongoose');

const FlashcardSchema = new mongoose.Schema(
    {
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        wordIds: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Word'
            }
        ],
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps: false,
        versionKey: false,
        _id: true
    }
);

module.exports = mongoose.model('Flashcard', FlashcardSchema);