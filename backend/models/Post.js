const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    content: String,
    likes: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model("Post", PostSchema);
