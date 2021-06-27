import React from 'react';
import { NavLink } from 'react-router-dom';

const Layout = ({ children }) => (
  <div className="layout">
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header-title">
          JsonPlaceholder app using React and Flow
        </h1>
      </div>
    </header>
    <aside className="menu">
      <div className="menu__wrapper">
        <NavLink
          activeClassName="menu-tab-active"
          className="menu-tab"
          to="/"
          exact
        >
          All Posts
        </NavLink>
        <NavLink
          activeClassName="menu-tab-active"
          className="menu-tab"
          to="/my-posts"
          exact
        >
          My Posts
        </NavLink>
        <NavLink
          activeClassName="menu-tab-active"
          className="menu-tab"
          to="/create-post"
          exact
        >
          Create Post
        </NavLink>
        <NavLink
          activeClassName="menu-tab-active"
          className="menu-tab"
          to="/favourite"
          exact
        >
          Favourite
        </NavLink>
      </div>
    </aside>
    <main className="content">
      <div className="content__wrapper">{children}</div>
    </main>
  </div>
);

export default Layout;
