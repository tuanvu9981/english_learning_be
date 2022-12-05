const wordService = require('../services/word.service');
const { CODES } = require('../code/codes');

const addWord = async (req, res) => {
    const { japanese, vietnamese, audioUrl } = req.body;

    const newWordData = await wordService.addWord({
        japanese,
        vietnamese,
        audioUrl
    });

    res.send({ result: newWordData });
};

const updateWord = async (req, res) => {
    const { id } = req.params;
    const { japanese, vietnamese, audioUrl } = req.body;

    const updatedWordData = await wordService.updateWord({
        id,
        japanese,
        vietnamese,
        audioUrl
    });

    res.send({ result: updatedWordData });
}

const getWordById = async (req, res) => {
    const { id } = req.params;
    const word = await wordService.getWordById(id);
    res.send({ result: word });
}

const getAllWords = async (req, res) => {
    const words = await wordService.getAllWords();
    res.send({ result: words });
}

const deleteWord = async (req, res) => {
    const { id } = req.params;
    const deletedWord = await wordService.deleteWord(id);
    res.send({ result: deletedWord });
}

module.exports = {
    addWord,
    updateWord,
    getWordById,
    getAllWords,
    deleteWord
}