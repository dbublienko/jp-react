// @flow
import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
/* eslint-disable import/named */
import { store } from '../../store/store';
import Loader from '../Loader';
import PostItem from '../PostItem';

// $FlowIgnore[signature-verification-failure]
const AllPosts = observer(() => {
  const { posts, loading, fetchError, fetchPosts } = store;
  const postsObj: Array<Object> = toJS(posts);

  // $FlowIgnore[incompatible-call]
  useEffect(async () => {
    if (!posts.length)
      await fetchPosts('https://jsonplaceholder.typicode.com/posts');
  }, []);

  if (loading) return <Loader />;
  if (fetchError)
    return (
      <div className="warning-message">
        Error during loading posts, try later
      </div>
    );
  if (postsObj.length === 0)
    return <div className="warning-message">No posts yet</div>;

  return (
    <div className="post-list-wrapper">
      <div className="post-list">
        {postsObj.map((item: {}, id: number) => (
          <PostItem post={item} key={`${Date.now() + id}`} />
        ))}
      </div>
    </div>
  );
});

export default AllPosts;
