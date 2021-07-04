/* eslint-disable */
import React from 'react';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { store } from '../../store/store';
import CustomBtn from '../CustomBtn';
import CustomInput from '../CustomInput/CustomInput';
import Loader from '../Loader';

const CreatePost = observer(() => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const { createPost, loading, fetchError, myPosts } = store;
  const myPostsObj = toJS(myPosts);
  const onSubmit = async (data) => {
    const updData = { ...data, userId: +data.userId };
    await createPost('https://jsonplaceholder.typicode.com/posts', updData);
    reset();
  };

  if (loading) return <Loader />;
  if (fetchError) return <div className="warning-message">Error during creating posts, try later</div>;

  return (
    <div className="create-post-wrapper">
      <h2 className="create-post-header">Create Post</h2>
      <form className="create-post" onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          id="userId"
          register={register}
          errors={errors.userId}
          labelText="User ID"
          required
          placeholder="ID"
          pattern={/^[0-9]+$/g}
          onlyNumber
        />
        <CustomInput
          id="body"
          register={register}
          errors={errors.body}
          labelText="Post message"
          required
          placeholder="Message"
        />
        <CustomInput
          id="title"
          register={register}
          errors={errors.title}
          labelText="Post title"
          required
          placeholder="Title"
        />
        <CustomBtn
          customClass="btn__create-post"
          label="Create Post"
          type="submit"
        />
      </form>
      {!!myPostsObj.length && <div className="create-post-goto">You can look at your posts in tab <Link to='/my-posts' className="create-post-link">My Posts</Link></div>}
    </div>
  );
});

export default CreatePost;
