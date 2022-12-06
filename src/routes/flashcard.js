const router = require('express').Router();
const FCController = require('../controllers/flashcard.controller');
// FC = Flashcard

router.post(
    '/flashcards',
    FCController.createNewFlashcard,
);

router.delete(
    '/flashcards',
    FCController.deleteFlashcard,
);

router.get(
    '/flashcards/:cardId',
    FCController.getWordsOfCard
);

router.get(
    'flashcards/:userId',
    FCController.getAllCardsOfUser,
);

router.put(
    'flashcards/:cardId',
    FCController.add1WordToFlashcard,
);

module.exports = router;