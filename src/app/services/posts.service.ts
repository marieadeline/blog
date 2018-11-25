import { Post } from './../post';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [
    new Post('Mon premier post', 'content1', 18),
    new Post('Mon deuxième post', 'content2', -2),
    new Post('Mon troisième post', 'content3', 0),
  ];

  postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.emitPosts();
  }

  deletePost(postToDelete: Post) {
    const index = this.posts.findIndex(
      (post) => {
        if (post === postToDelete) {
          return true;
        }
      }
    );
    this.posts.splice(index, 1);
    this.emitPosts();
  }

  like(post: Post) {
    post.loveIts++;
    this.emitPosts();
  }

  unlike(post: Post) {
    post.loveIts--;
    this.emitPosts();
  }

}
