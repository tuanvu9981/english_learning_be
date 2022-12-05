const router = require('express').Router();
const wordController = require('../controllers/word.controller');

router.get(
    '/words',
    wordController.getAllWords
);

router.get(
    '/words/:id',
    wordController.getWordById
);

router.post(
    '/words',
    wordController.addWord
);

router.put(
    '/words/:id',
    wordController.updateWord
);

router.delete(
    '/words/:id',
    wordController.deleteWord
)

module.exports = router;