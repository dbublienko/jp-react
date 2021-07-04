// @flow
import { action, makeAutoObservable, observable } from 'mobx';

class PostsStore {
  posts: Array<Object> = [];

  myPosts: Array<Object> = JSON.parse(localStorage.getItem('myPosts')) || [];

  likedPosts: Array<Object> =
    JSON.parse(localStorage.getItem('likedPosts')) || [];

  loading: boolean = false;

  fetchError: boolean = false;

  constructor() {
    makeAutoObservable(this, {
      posts: observable,
      loading: observable,
      fetchError: observable,
      fetchPosts: action.bound,
      createPost: action.bound,
      likePost: action.bound,
      unlikePost: action.bound,
    });
  }

  async fetchPosts(url: string) {
    this.loading = true;
    const promisePosts = await fetch(url);
    if (promisePosts.ok) {
      const res = await promisePosts.json();
      this.posts = res;
      this.loading = false;
    } else {
      this.loading = false;
      this.fetchError = true;
      const timer = await setTimeout(() => {
        this.fetchError = false;
        clearTimeout(timer);
      }, 1500);
    }
  }

  async createPost(url: string, data) {
    this.loading = true;
    const promisePost = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (promisePost.ok) {
      const res = await promisePost.json();
      this.myPosts.push(res);
      localStorage.setItem('myPosts', JSON.stringify(this.myPosts));
      this.loading = false;
    } else {
      this.loading = false;
      this.fetchError = true;
      const timer = await setTimeout(() => {
        this.fetchError = false;
        clearTimeout(timer);
      }, 1500);
    }
  }

  likePost(post) {
    const existingId = this.likedPosts.findIndex((item) => item.id === post.id);
    if (existingId === -1) {
      this.likedPosts.push(post);
      localStorage.setItem('likedPosts', JSON.stringify(this.likedPosts));
    }
  }

  unlikePost(post) {
    const targetId = this.likedPosts.findIndex((item) => item.id === post.id);
    if (targetId !== -1) {
      this.likedPosts.splice(targetId, 1);
    }
    localStorage.setItem('likedPosts', JSON.stringify(this.likedPosts));
  }
}

export const store: PostsStore = new PostsStore();
