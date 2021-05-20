const mongoose = require('../database');

const TimelineSchema = new mongoose.Schema({
    description:{
        type: String,
        require: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    createAt:{
        type: Date,
        default: Date.now,
    },
});

const Timeline = mongoose.model('Timeline', TimelineSchema);

module.exports = Timeline;