import React from 'react';
import { useLocation } from 'react-router';
import postsJson from "../../mock/data.json";

function PostDetail() {
  const { pathname } = useLocation();
  const id = pathname.split('/')[2];
  const post = postsJson.posts.find(post => post.id === id);
  return (
    <>
      <img src={post?.author.avatar} alt={post?.author.name} />
      <div className="card-body">
        <h3 className="card-title my-3">Name: {post?.author.name}</h3>
        <p className="card-text"><b>Title:</b> {post?.title}</p>
        <p className="card-text"><b>Summary:</b> {post?.summary}</p>
        <p className="card-text">
          <b>Publish Year:</b> {post && new Date(post.publishDate).getFullYear()}
        </p>
        <b>Category:</b> {post?.categories.map(category => (
          <u className="card-text">{category.name} | </u>
        ))}
      </div>
    </>
  )
}

export default PostDetail