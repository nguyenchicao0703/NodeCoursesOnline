const mongoose = require('mongoose');

require('dotenv').config();
const url = process.env.SERVER_MONGO_URL;

async function connect() {
    try {
        await mongoose.connect(url);
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!', error);
    }
}

module.exports = { connect }
