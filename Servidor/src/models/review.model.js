const mongoose = require('mongoose');

const reviewScheme = new mongoose.Schema({

    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },

    stars:{
        type: Number,
        required: true,
    },

    review_text:{
        type: String,
        required: true,
    },

    review_Date:{
        type: Date,
        default: Date.now, 
    },

    publicacionId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'publication',
        required: true,
    }

});

const ReviewModel = mongoose.model('Review', reviewScheme);
module.exports = ReviewModel;