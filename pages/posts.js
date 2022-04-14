import Link from "next/link";
import MainLayout from "../components/MainLayout";
import {useState, useEffect} from "react";

export default function Posts({posts:serverPosts}) {
    const [posts, setPosts] = useState(serverPosts);

    useEffect(() => {
        async function load() {
            const res = await fetch('http://localhost:4200/posts');
            const json = await res.json();
            setPosts(json)
        }
        if (!serverPosts) {
            load()
        }
    }, [])

    if (!posts) {
        return <MainLayout>
            <p>Loading...</p>
        </MainLayout>
    }
    return (
        <MainLayout>
            <h1>Posts page</h1>
            <div>
                <ul>
                    {posts.map((item) => {
                        return (
                            <li key={item.id}><Link href={`/posts/${item.id}`}><a>{item.title}</a></Link></li>
                        )
                    })}
                </ul>
            </div>
        </MainLayout>
    );
};

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')
    const posts = await res.json()

    return {
        props: {
            posts,
        },
    }
}
