const flashcardService = require('../services/flashcard.service');

const createNewFlashcard = async (req, res) => {
    const { userId, title, description } = req.body;

    const newCard = await flashcardService.createNewFlashcard({
        userId,
        title,
        description
    });

    res.send({ result: newCard });
};

const deleteFlashcard = async (req, res) => {
    const { id } = req.params;
    const deletedCard = await flashcardService.deleteFlashcard(id);
    res.send({ result: deletedCard });
};

const getAllCardsOfUser = async (req, res) => {
    const { userId } = req.params;
    const cards = await flashcardService.getAllCardsOfUser(userId);
    res.send({ result: cards });
};

const add1WordToFlashcard = async (req, res) => {
    const { newWordId } = req.body;
    const { cardId } = req.params;
    const updatedCard = await flashcardService.add1WordToFlashcard({
        newWordId,
        cardId
    });
    res.send({ result: updatedCard });
};

const getWordsOfCard = async (req, res) => {
    const { cardId } = req.params;
    const words = await flashcardService.getWordsOfCard({ cardId });
    res.send({ result: words });
};

module.exports = {
    createNewFlashcard,
    deleteFlashcard,
    getAllCardsOfUser,
    add1WordToFlashcard,
    getWordsOfCard
}