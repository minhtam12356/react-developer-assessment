import React from 'react';
import { useLocation } from 'react-router';
import postsJson from "../../mock/data.json";

function PostDetail() {
  const { pathname } = useLocation();
  const id = pathname.split('/')[2];
  const post = postsJson.posts.find(post => post.id === id);
  return (
    <div className='w-25 p-3'>{post?.id}</div>
  )
}

export default PostDetail