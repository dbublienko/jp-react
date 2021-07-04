import React from 'react';
import AllPosts from './components/AllPosts';
import CreatePost from './components/CreatePost';
import MyPosts from './components/MyPosts';
import Favourite from './components/Favourite/Favourite';

const routes = [
  {
    path: '/',
    exact: true,
    key: 'ALL-POSTS',
    component: () => <AllPosts />,
  },
  {
    path: '/my-posts',
    exact: true,
    key: 'MY-POSTS',
    component: () => <MyPosts />,
  },
  {
    path: '/create-post',
    exact: true,
    key: 'CREATE',
    component: () => <CreatePost />,
  },
  {
    path: '/favourite',
    exact: true,
    key: 'FAVOURITE',
    component: () => <Favourite />,
  },
];

export default routes;
