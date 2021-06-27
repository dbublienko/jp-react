import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
/* eslint-disable import/named */
import { store } from '../../store/store';
import Loader from '../Loader';
import PostItem from '../PostItem';

const AllPosts = observer(() => {
  const { posts, loading, fetchError, fetchPosts } = store;
  const postsObj = toJS(posts);

  useEffect(async () => {
    if (!posts.length) fetchPosts('https://jsonplaceholder.typicode.com/posts');
  }, []);

  if (loading) return <Loader />;
  if (fetchError) return <div>Error during loading posts, try later</div>;

  return (
    <div className="post-list-wrapper">
      <div className="post-list">
        {postsObj.map((item) => (
          <PostItem post={item} />
        ))}
      </div>
    </div>
  );
});

export default AllPosts;
