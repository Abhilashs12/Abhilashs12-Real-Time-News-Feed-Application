import { socket } from "../socket";
import { useState } from "react";

export default function PostForm() {
    const [content, setContent] = useState("");

    const submit = () => {
        if (content.trim()) {
            socket.emit("newPost", content);
            setContent("");
        }
    };

    return (
        <div>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} />
            <button onClick={submit}>Post</button>
        </div>
    );
}
