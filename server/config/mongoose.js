const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const models_path = path.join(__dirname, '../models');

fs.readdirSync(models_path).forEach(function (file) {
    if (file.indexOf('.js') >= 0) {
        require(models_path + '/' + file);
    }
})

mongoose.connect('mongodb://localhost/rate_my_cakes');
