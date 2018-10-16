const mongoose = require('mongoose');
const Cake = mongoose.model('Cake');

module.exports = {
    retrieveAll: function (req, res) {
        Cake.find({}, function (err, data) {
            if (err) {
                res.json({ message: "Error, error: err" });
            }
            else {
                res.json({ message: "Success", data: data });
            }
        });
    },
    // Using Promise, .populate replaces id's in one to many relationships with object content
    retrieveOne: function (req, res) {
        Cake.findOne({ _id: req.params.id })
            .populate('posts')
            .exec(function (err, data) {
                if (err) return handleError(err);
                res.json({ message: "Success", data: data });
        });
    },
    createOne: function (req, res) {
        Cake.create(
            req.body, function (err, data) {
            if (err) {
                res.json({ message: err });
            }
            else {
                res.json({ message: "Success", data: data });
            }
        });
    },
    updateOne: function (req, res) {
        Cake.findOneAndUpdate({ _id: req.params.id }, { $push: { posts: data }}, function (err, data) {
            if (err) {
                res.json({ message: "Error, error: err" });
            }
            else {
                res.json({ message: "Success", data: data });
            }
        });
    },
    deleteOne: function (req, res) {
        Cake.findOneAndDelete({ _id: req.params.id }, function (err, data) {
            if (err) {
                res.json({ message: "Error, error: err" });
            }
            else {
                res.json({ message: "Success", data: data });
            }
        });
    }
}