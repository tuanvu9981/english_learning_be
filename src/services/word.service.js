const Word = require('../models/word.model');
const { CODES } = require('../code/codes');

const addWord = async ({ japanese, vietnamese, audioUrl }) => {
    const existedWord = await Word.findOne({ japanese });
    if (existedWord) {
        return {
            code: CODES.OBJ_EXITS,
            data: {}
        }
    }
    const newWord = await Word.create({
        japanese,
        vietnamese,
        audioUrl
    });
    return {
        code: CODES.SUCCESS,
        data: newWord
    };
};

const getWordById = async id => {
    const word = await Word.findById({ _id: id });
    if (!word) {
        return {
            code: CODES.OBJ_NOT_FOUND,
            data: {}
        }
    }
    return {
        code: CODES.SUCCESS,
        data: word
    }
}

const getAllWords = async () => {
    const words = await Word.find();
    return {
        code: CODES.SUCCESS,
        data: words
    }
}

const updateWord = async ({
    id,
    japanese,
    vietnamese,
    audioUrl
}) => {
    const word = await Word.findByIdAndUpdate(
        { _id: id },
        {
            japanese,
            vietnamese,
            audioUrl
        },
        { new: true }
    );

    if (!word) {
        return {
            code: CODES.OBJ_NOT_FOUND,
            data: {}
        }
    }
    return {
        code: CODES.SUCCESS,
        data: word
    }
}

const deleteWord = async id => {
    const word = Word.findById({ _id: id });
    if (!word) {
        return {
            code: CODES.OBJ_NOT_FOUND,
            data: {}
        }
    }
    await Word.findByIdAndDelete({ _id: id });
    return {
        code: CODES.SUCCESS,
        data: word
    }
}

module.exports = {
    addWord,
    getWordById,
    getAllWords,
    updateWord,
    deleteWord
}