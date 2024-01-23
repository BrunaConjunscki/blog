import sytles from'./inicio.module.css'
import posts from 'json/posts.json'
import Post from "componentes/PostCard";

export default function Inicio(){
    return(
        <ul className={sytles.posts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <Post post={post}/>
                </li>
            ))}
        </ul>
    )
}