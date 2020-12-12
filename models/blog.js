const mongoose = require('mongoose');
const S = mongoose.Schema;

const blogS = new S({
    title: {
        type: String,
        required: true
    },
    snippet:{
        type: String,
        required: true
    },
    body: {
        type:String,
        required: true
    }
}, {timestamps: true})

const Blog = mongoose.model('Blog', blogS);
module.exports = Blog;