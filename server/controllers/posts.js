const mongoose = require('mongoose');
const Post = mongoose.model('Post');
const Cake = mongoose.model('Cake');

module.exports = {
    retrieveAll: function (req, res) {
        Post.find({}, function (err, data) {
            if (err) {
                res.json({ message: "Error, error: err" });
            }
            else {
                res.json({ message: "Success", data: data });
            }
        });
    },
    retrieveOne: function (req, res) {
        Post.findOne({ _id: req.params.id }, function (err, data) {
            if (err) {
                res.json({ message: "Error, error: err" });
            }
            else {
                res.json({ message: "Success", data: data });
            }
        });
    },
    createOne: function (req, res) {
        Post.create({
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed
        }, function (err, data) {
            if (err) {
                res.json({ message: "Error, error: err" });
            }
            else {
                res.json({ message: "Success", data: data });
            }
        });
    },
    updateOne: function (req, res) {
        Post.create(req.body, function (err, data) {
            if (err) { res.json({ message: err }); }
            else {
                Cake.findOneAndUpdate({ _id: req.params.id }, { $push: { posts: data }}, function (err, data2) {
                    if (err) {
                        res.json({ message: err });
                    }
                    else {
                        res.json({ message: "Success", data: data2 });
                    }
                });
            };
        });
    },
    deleteOne: function (req, res) {
        Post.findOneAndDelete({ _id: req.params.id }, function (err, data) {
            if (err) {
                res.json({ message: "Error, error: err" });
            }
            else {
                res.json({ message: "Success", data: data });
            }
        });
    }
}