require('dotenv').config();

const config = {
    PAGE: process.env.PAGE || 1,
    LIMIT: process.env.LIMIT || 10
};

module.exports = {config};
