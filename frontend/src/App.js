import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts, addPostLive } from "./features/postsSlice";
import { socket } from "./socket";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
        socket.on("postAdded", (post) => {
            dispatch(addPostLive(post));
        });
    }, [dispatch]);

    return (
        <>
            <h2>Real-Time News Feed</h2>
            <PostForm />
            <PostList />
        </>
    );
}

export default App;
