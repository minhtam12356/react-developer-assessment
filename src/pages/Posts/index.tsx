import useCategory from '../../hook/useCategory';
import React, { useState } from 'react';
import { IPosts } from '../../types/post';
import { Post, ListPost } from './style';
import postsJson from "../../mock/data.json";
import { Link } from 'react-router-dom';
import Filter from '../../components/Filter';

function Posts() {
    const [posts, setPosts] = useState<IPosts>(postsJson);
    const { categories } = useCategory();
    const onChangeFilter = (item: string) => {
        console.log('item:', item)
    }
    return (
        <div className='container'>
            <h2>Posts</h2>
            <span>Filter:</span><Filter filterItems={categories} onChangeFilter={onChangeFilter}/>
            <ListPost>
                {posts.posts.map((post, index) =>
                    <Post className="card" key={index}>
                        <img src={post.author.avatar} className="card-img-top" alt={post.author.name} />
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.summary}</p>
                            <Link to={`/posts/${post.id}`} className="btn btn-primary">Detail</Link>
                        </div>
                    </Post>)
                }
            </ListPost>
        </div>   
    )
}

export default Posts