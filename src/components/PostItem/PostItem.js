import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import heartIcon from '../../assets/images/heart.svg';
import { store } from '../../store/store';

type Props = {
  post: {
    userId: string,
    id: number,
    title: string,
    body: string,
  },
  liked?: ?boolean,
};

const PostItem = (props: Props) => {
  const { post, liked } = props;
  const { likePost, unlikePost } = store;
  const [isLiked, setIsLiked] = useState(liked);
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-header">
          <span className="post-user">User: {post.userId}</span>
          <span className="post-id">Post #{post.id}</span>
        </div>
        <div className="post-body">
          <span className="post-title">{post.title}</span>
          <span className="post-text">{post.body}</span>
        </div>
        <div className="post-btn">
          <ReactSVG
            src={heartIcon}
            className={isLiked ? 'post-icon post-icon-active' : 'post-icon'}
            onClick={() => {
              setIsLiked(!isLiked);
              if (isLiked) {
                unlikePost(post);
              } else {
                likePost(post);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PostItem;
