import { action, makeAutoObservable, observable } from 'mobx';

class PostsStore {
  posts = [];

  loading = false;

  fetchError = false;

  constructor() {
    makeAutoObservable(this, {
      posts: observable,
      loading: observable,
      fetchError: observable,
      fetchPosts: action.bound,
    });
  }

  async fetchPosts(url) {
    this.loading = true;
    const promisePosts = await fetch(url);
    if (promisePosts.ok) {
      const res = await promisePosts.json();
      this.posts = res;
      this.loading = false;
    } else {
      this.loading = false;
      this.fetchError = true;
    }
  }
}

export const store = new PostsStore();
