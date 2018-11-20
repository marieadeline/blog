import { Post } from './post';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';

  posts: Post[] = [
      new Post('Mon premier post', 'content1', 18),
      new Post('Mon deuxième post', 'content2', -2),
      new Post('Mon troisième post', 'content3', 0),
  ];
}
