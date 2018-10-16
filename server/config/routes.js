const cakes = require('../controllers/cakes.js')
const posts = require('../controllers/posts.js')

module.exports = function (app) {
    // Retrieve all
    app.get('/cakes', function (req, res) {
        cakes.retrieveAll(req, res);
    });

    // Retrieve 1
    app.get('/cakes/:id', function (req, res) {
        cakes.retrieveOne(req, res);
    });

    // Create
    app.post('/cakes', function (req, res) {
        cakes.createOne(req, res);
    });

    // Update
    app.put('/cakes/:id', function (req, res) {
        cakes.updateOne(req, res);
    });

    // Delete
    app.delete('/cakes/:id', function (req, res) {
        cakes.deleteOne(req, res);
    });

    app.post('/posts', function (req, res) {
        posts.createOne(req, res);
    });

    app.put('/posts/:id', function (req, res) {
        posts.updateOne(req, res);
    });
}