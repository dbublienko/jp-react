import React from 'react';
import AllPosts from './components/AllPosts';

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
    component: () => <span>My Posts</span>,
  },
  {
    path: '/create-post',
    exact: true,
    key: 'CREATE',
    component: () => <span>Create Post</span>,
  },
  {
    path: '/favourite',
    exact: true,
    key: 'FAVOURITE',
    component: () => <span>Favourite</span>,
  },
];

export default routes;
