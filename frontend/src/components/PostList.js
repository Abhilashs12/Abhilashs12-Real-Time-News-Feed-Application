import { useSelector } from "react-redux";

export default function PostList() {
    const posts = useSelector((state) => state.posts.list);

    return (
        <div>
            {posts.map((p) => (
                <div key={p._id}>
                    <p>{p.content}</p>
                </div>
            ))}
        </div>
    );
}
