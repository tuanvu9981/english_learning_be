const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema(
    {
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        content: {
            type: String
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

module.exports = mongoose.model('Story', StorySchema);