const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/diario');
mongoose.Promise = global.Promise;

module.exports = mongoose;