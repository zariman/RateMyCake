const mongoose = require('mongoose');

const CakeSchema = new mongoose.Schema({
    baker_name: { type: String, required: [true, "Must enter a baker name"] },
    image_url: { type: String, required: [true, "Must enter an image url"] },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
}, { timestamps: true });

module.exports = mongoose.model('Cake', CakeSchema);  