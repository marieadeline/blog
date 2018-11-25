import { PostsService } from './../services/posts.service';
import { Post } from './../post';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  getColor() {
    if (this.post.loveIts > 0) {
      return 'green';
    } else if (this.post.loveIts < 0) {
      return 'dark-red';
    }
  }

  like() {
    this.postsService.like(this.post);
  }

  unlike() {
    this.postsService.unlike(this.post);
  }

  delete() {
    this.postsService.deletePost(this.post);
  }

}
