const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const connectDB = require("./config/db");
const Post = require("./models/Post");

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

connectDB();

const io = new Server(server, {
    cors: { origin: "*" }
});

io.on("connection", (socket) => {
    console.log("User connected");

    socket.on("newPost", async (content) => {
        const post = await Post.create({ content });
        io.emit("postAdded", post);
    });
});

app.get("/posts", async (req, res) => {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
});

server.listen(5000, () => {
    console.log("Backend running on port 5000");
});
