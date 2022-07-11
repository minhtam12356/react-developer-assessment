import * as React from 'react';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from 'react-router-dom';
import { IPost } from '../../types/post';
import Loading from '../Loading';
import { ListPost, Post } from './style';

interface InfiniteScrollPostsProps {
  itemOneTimeLoad?: number;
  dataJson: IPost[];
  totalItems: number;
}

function InfiniteScrollPosts({
  itemOneTimeLoad = 80,
  dataJson = [],
  totalItems,
}: InfiniteScrollPostsProps) {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [numberPost, setNumberPost] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const loadPostMore = () => {
    let loadPost;
    if (posts.length !== totalItems) {
      loadPost = setTimeout(() => {
        setPosts([
          ...posts,
          ...dataJson.slice(numberPost, numberPost + itemOneTimeLoad),
        ]);
        setNumberPost(numberPost + itemOneTimeLoad);
      }, 500);
    } else {
      setHasMore(false);
      clearTimeout(loadPost);
    }
  };
  useEffect(() => {
    if (dataJson.length) {
      setPosts([]);
      setHasMore(true);
      setNumberPost(0);
    }
  }, [dataJson])
  return (
    <div>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadPostMore}
        hasMore={hasMore}
        loader={
          <>
            <Loading height='30px' width='100%' />
            <Loading height='30px' width='100%' />
            <Loading height='30px' width='100%' />
          </>
        }
      >
        <ListPost>
          {posts.map((post, index) =>
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
        {!hasMore && <div className='text-center'>--- End! ---</div>}
      </InfiniteScroll>
    </div>
  );
}

export default InfiniteScrollPosts;