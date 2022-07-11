import useCategory from '../../hook/useCategory';
import React, { useEffect, useState } from 'react';
import { IPost } from '../../types/post';
import postsJson from "../../mock/data.json";
import { useSearchParams } from 'react-router-dom';
import Filter from '../../components/Filter';
import InfiniteScrollPosts from '../../components/InfiniteScrollPosts';

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
            <InfiniteScrollPosts totalItems={posts.length} dataJson={posts} itemOneTimeLoad={10} />
        </div>
    )
}

export default Posts