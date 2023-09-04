const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater'); // tạo slug
const mongooseDelete = require('mongoose-delete');


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

// Add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { 
    overrideMethods: true,
    deletedAt:true
 });

module.exports =  mongoose.model('Course', Course); 