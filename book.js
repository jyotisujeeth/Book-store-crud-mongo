const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    // title: String,
    // publishedOn: {
    //     type: Date,
    //     default: Date.now,
    // },
    // keywords: Array,
    // published: Boolean,
    // author: {
    //     type: Schema.ObjectId,
    //     ref: 'User',
    // },
    // //embedded sub document
    // detail: {
    //     modelNumber: Number,
    //     hardCover: Boolean,
    //     reviews: Number,
    //     rank: Number,
    // }

    title: String,
    author: String,
    category: String,
});

module.exports = mongoose.model('Book', BookSchema);
