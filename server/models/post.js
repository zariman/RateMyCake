const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    comment: { type: String, required: [true, "Must enter a comment"] },
    rating: { type: Number, required: [true, "Must enter a rating"] },
}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);  