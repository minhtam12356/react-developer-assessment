import useCategory from '../../hook/useCategory';
import React, { useEffect, useState } from 'react';
import { IPost } from '../../types/post';
import { Post, ListPost } from './style';
import postsJson from "../../mock/data.json";
import { Link, useSearchParams } from 'react-router-dom';
import Filter from '../../components/Filter';
import InfiniteScrollComponent from '../../components/InfiniteScrollComponent';

function Posts() {
    const [posts, setPosts] = useState<IPost[]>(postsJson.posts);
    const { categories } = useCategory();
    const [searchParams] = useSearchParams();
    useEffect(() => {
        if (searchParams.get('category')) {
            const categoryQuery = searchParams.get('category');
            const result = postsJson.posts.filter(
                post => post.categories.filter(
                    category => category.name === categoryQuery
                ).length)
            setPosts(result);
        }
        else {
            setPosts(postsJson.posts);
        }
    }, [searchParams])
    return (
        <div>
            <h2>Posts</h2>
            <span>Filter:</span><Filter filterItems={categories} /><span>Founded {posts.length} result</span>
            {/* <ListPost> */}
                {/* {posts.map((post, index) =>
                    <Post className="card" key={index}>
                        <img src={post.author.avatar} className="card-img-top" alt={post.author.name} />
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.summary}</p>
                            <Link to={`/posts/${post.id}`} className="btn btn-primary">Detail</Link>
                        </div>
                    </Post>)
                } */}
                <InfiniteScrollComponent totalItems={posts.length} dataJson={posts} itemOneTimeLoad={10} />
            {/* </ListPost> */}
        </div>
    )
}

export default Posts