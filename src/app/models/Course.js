const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator'); // tạo slug
mongoose.plugin(slug);

// Define model of course
const Schema = mongoose.Schema;
const Course = new Schema({
    name: { type: String, require: true },
    decs: { type: String, maxLength: 600 },
    image: { type: String, require: true },
    videoId: { type: String, require: true },
    slug: { type: String, slug: 'name', unique: true }
}, {
    timestamps: true
});

module.exports =  mongoose.model('Course', Course); 