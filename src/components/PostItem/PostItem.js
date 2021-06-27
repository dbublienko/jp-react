import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import heartIcon from '../../assets/images/heart.svg';

const PostItem = ({ post }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-header">
          <span className="post-user">User: {post.userId}</span>
          <span className="post-id">Post #{post.id}</span>
        </div>
        <div className="post-body">
          <span className="post-title">{post.title}</span>
          <span className="post-text">Post #{post.body}</span>
        </div>
        <div className="post-btn">
          <ReactSVG
            src={heartIcon}
            className={liked ? 'post-icon post-icon-active' : 'post-icon'}
            onClick={() => setLiked(!liked)}
          />
        </div>
      </div>
    </div>
  );
};

export default PostItem;