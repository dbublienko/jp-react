import React from 'react';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import { store } from '../../store/store';
import PostItem from '../PostItem';

const Favourite = observer(() => {
  const { likedPosts } = store;
  const likedPostsObj = toJS(likedPosts);
  console.log(likedPostsObj);

  if (likedPostsObj.length === 0) {
    return <div className="warning-message">No posts yet</div>;
  }

  return (
    <div className="liked-posts-wrapper">
      <div className="liked-posts">
        <h2 className="liked-posts-header">Liked Posts</h2>
        {likedPostsObj.map((item: {}, id: number) => (
          <PostItem post={item} key={`${Date.now() + id}`} liked />
        ))}
      </div>
    </div>
  );
});

export default Favourite;
