const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
const app = express();
app.use(cors());
app.use(
    express.json({
        extended: true,
        limit: '1mb',
    }),
);

app.use(express.json());
require('./routes')(app);

const { PORT, URI, LANGUAGES } = process.env;
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("db connected!");
});

app.listen(PORT, () => {
    const languages = JSON.parse(LANGUAGES);
    console.log(languages);
    for (let i = 0; i < languages.length; i++) {
        console.log(languages[i]);
    }
    console.log(`Server is running on port ${PORT}`);
});