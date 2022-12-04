const express = require('express');
const cors = require('cors');

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

const { PORT } = process.env;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});