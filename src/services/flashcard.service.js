const Flashcard = require('../models/flashcard.model');
const wordService = require('../services/word.service');
const { CODES } = require('../code/codes');

const createNewFlashcard = async ({
    userId,
    title,
    description = "",
    wordIds = []
}) => {
    const existedCard = await Flashcard.findOne({ title });
    if (existedCard) {
        return {
            code: CODES.OBJ_EXITS,
            data: {}
        }
    }
    const newCard = await Flashcard.create({
        userId,
        title,
        description,
        wordIds
    });
    return {
        code: CODES.SUCCESS,
        data: newCard
    }
}

const deleteFlashcard = async id => {
    const card = Flashcard.findById({ _id: id });
    if (!card) {
        return {
            code: CODES.OBJ_NOT_FOUND,
            data: {}
        }
    }
    await Flashcard.findByIdAndDelete({ _id: id });
    return {
        code: CODES.SUCCESS,
        data: word
    }
}

const getAllCardsOfUser = async userId => {
    const cards = await Flashcard.find({ userId: userId });
    if (!cards) {
        return {
            code: CODES.OBJ_NOT_FOUND,
            data: {}
        }
    }
    return {
        code: CODES.SUCCESS,
        data: cards
    }
}

const add1WordToFlashcard = async ({ newWordId, cardId }) => {
    const updatedCard = await Flashcard.findOneAndUpdate(
        { _id: cardId },
        { $pull: { wordIds: newWordId } }
    );
    return {
        code: CODES.SUCCESS,
        data: updatedCard
    }
}

const getWordsOfCard = async ({ cardId }) => {
    const card = await Flashcard.findById({ _id: cardId });
    const ids = card.wordIds;
    let words = [];
    for (let i = 0; i < ids.length; i++) {
        const word = await wordService.getWordById(ids[i]);
        words.push(word);
    }
    return {
        code: CODES.SUCCESS,
        data: words
    }
}

module.exports = {
    createNewFlashcard,
    deleteFlashcard,
    getAllCardsOfUser,
    add1WordToFlashcard,
    getWordsOfCard
}