// @flow
import React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { store } from '../../store/store';
import PostItem from '../PostItem';

const MyPosts = observer(() => {
  const { myPosts } = store;
  const myPostsObj = toJS(myPosts);
  console.log(myPostsObj);

  if (myPostsObj.length === 0) {
    return <div className="warning-message">No posts yet</div>;
  }

  return (
    <div className="my-posts-wrapper">
      <div className="my-posts">
        <h2 className="my-posts-header">My Posts</h2>
        {myPostsObj.map((item: {}, id: number) => (
          <PostItem post={item} key={`${Date.now() + id}`} />
        ))}
      </div>
    </div>
  );
});

export default MyPosts;
