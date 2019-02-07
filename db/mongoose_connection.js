const mongoose = require('mongoose');
const mongoDB = process.env.MONGODB_URI || process.env.MONGO_URI || 'mongodb://localhost:27017/Coffee';

mongoose.Promise = global.Promise;

mongoose.connect(mongoDB);

module.exports = {
    mongoose
};